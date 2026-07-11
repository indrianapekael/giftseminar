import type { APIRoute } from 'astro';
import { getAllPosts, createPost } from '@/lib/db';

// Ensure this API supports POST/PUT/DELETE by running server-side
export const prerender = false;

// GET all posts
export const GET: APIRoute = async () => {
  try {
    const posts = await getAllPosts();
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    // Log the error on the server for debugging
    console.error('GET /api/posts error:', error && (error.stack || error.message || error));
    const payload: any = { error: String(error && (error.message || error) || 'Unknown error') };
    if (process.env.NODE_ENV !== 'production' && error && error.stack) payload.stack = error.stack;
    return new Response(JSON.stringify(payload), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

// POST create new post
export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const postId = await createPost(data);

    return new Response(JSON.stringify({ id: postId }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
