import type { APIRoute } from 'astro';
import { getAllProducts, createProduct } from '@/lib/db';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const products = await getAllProducts();
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('GET /api/products error:', error && (error.stack || error.message || error));
    return new Response(JSON.stringify({ error: String(error && (error.message || error) || 'Unknown error') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const productId = await createProduct(data);
    return new Response(JSON.stringify({ id: productId }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('POST /api/products error:', error && (error.stack || error.message || error));
    return new Response(JSON.stringify({ error: String(error && (error.message || error) || 'Unknown error') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};