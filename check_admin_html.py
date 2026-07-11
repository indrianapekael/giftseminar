import re
from html.parser import HTMLParser

path = 'src/pages/admin.astro'
with open(path, 'r', encoding='utf8') as f:
    text = f.read()
body = re.sub(r'^---[\s\S]*?---\n', '', text, count=1)

class TagCounter(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.errors = []

    def handle_starttag(self, tag, attrs):
        if tag in ('area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'): return
        self.stack.append((tag, self.getpos()))

    def handle_endtag(self, tag):
        if not self.stack:
            self.errors.append(f'Unexpected </{tag}> at {self.getpos()}')
            return
        last, pos = self.stack.pop()
        if last != tag:
            self.errors.append(f'Tag mismatch: opened <{last}> at {pos}, closed </{tag}> at {self.getpos()}')

parser = TagCounter()
parser.feed(body)
print('unclosed count', len(parser.stack))
print('unclosed sample', parser.stack[-20:])
print('errors count', len(parser.errors))
for err in parser.errors[:50]:
    print(err)
