export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  author: string;
  url: string;
  ogImage: string;
  twitterHandle: string;

  // Theme settings
  theme: {
    accentColor: string;
    defaultColorMode: 'light' | 'dark' | 'system';
    showThemeToggle: boolean;
  };

  // Navigation
  nav: {
    main: Array<{
      name: string;
      href: string;
    }>;
  };

  // Features toggle
  features: {
    blog: boolean;
    portfolio: boolean;
    landing: boolean;
    rss: boolean;
    sitemap: boolean;
  };

  // Social links
  social: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };

  // Blog settings
  blog: {
    postsPerPage: number;
    showToc: boolean;
    showReadingTime: boolean;
    showShareButtons: boolean;
    showRelatedPosts: boolean;
  };

  // Portfolio settings
  portfolio: {
    projectsPerPage: number;
    showTechStack: boolean;
    showYear: boolean;
  };
}

const siteConfig: SiteConfig = {
  name: 'SeminarKit',
  title: 'SeminarKit — Perlengkapan Seminar Profesional',
  description: 'SeminarKit menyediakan paket perlengkapan seminar lengkap: tas seminar, sertifikat, ID card, note, dan material promosi.',
  author: 'Tim SeminarKit',
  url: 'https://example.com/seminarkit',
  ogImage: '/og-image.png',
  twitterHandle: '@seminarkit',

  theme: {
    accentColor: 'hsl(280, 70%, 60%)',
    defaultColorMode: 'system',
    showThemeToggle: true
  },

  nav: {
    main: [
      { name: 'Beranda', href: '/' },
      { name: 'Produk', href: '/landing' },
      { name: 'Portfolio', href: '/work' },
      { name: 'Blog', href: '/blog' },
      { name: 'Tentang', href: '/about' }
    ]
  },

  features: {
    blog: true,
    portfolio: true,
    landing: true,
    rss: true,
    sitemap: true
  },

  social: {
    github: undefined,
    twitter: 'https://twitter.com/seminarkit',
    linkedin: undefined
  },

  blog: {
    postsPerPage: 6,
    showToc: true,
    showReadingTime: true,
    showShareButtons: true,
    showRelatedPosts: true
  },

  portfolio: {
    projectsPerPage: 9,
    showTechStack: true,
    showYear: true
  }
};

export default siteConfig;