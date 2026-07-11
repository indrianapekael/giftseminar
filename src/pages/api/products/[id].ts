import type { APIRoute } from 'astro';
import { getProduct, updateProduct, deleteProduct } from '@/lib/db';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const productId = parseInt(params.id!);
    const product = await getProduct(productId);
    if (!product) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('GET /api/products/:id error:', error && (error.stack || error.message || error));
    return new Response(JSON.stringify({ error: String(error && (error.message || error) || 'Unknown error') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const PUT: APIRoute = async ({ params, request }) => {
  try {
    const productId = parseInt(params.id!);
    const data = await request.json();
    await updateProduct(productId, data);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('PUT /api/products/:id error:', error && (error.stack || error.message || error));
    return new Response(JSON.stringify({ error: String(error && (error.message || error) || 'Unknown error') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const productId = parseInt(params.id!);
    await deleteProduct(productId);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('DELETE /api/products/:id error:', error && (error.stack || error.message || error));
    return new Response(JSON.stringify({ error: String(error && (error.message || error) || 'Unknown error') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};