import type { APIRoute } from 'astro';
import { getPost, updatePost, deletePost } from '@/lib/db';

// Ensure this API supports PUT/DELETE by running server-side
export const prerender = false;

// GET single post
export const GET: APIRoute = async ({ params }) => {
  try {
    const postId = parseInt(params.id!);
    const post = await getPost(postId);

    if (!post) {
      return new Response(JSON.stringify({ error: 'Post not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(post), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// PUT update post
export const PUT: APIRoute = async ({ params, request }) => {
  try {
    const postId = parseInt(params.id!);
    const data = await request.json();

    await updatePost(postId, data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

// DELETE post
export const DELETE: APIRoute = async ({ params }) => {
  try {
    const postId = parseInt(params.id!);
    await deletePost(postId);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
