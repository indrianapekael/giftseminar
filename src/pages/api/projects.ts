import type { APIRoute } from 'astro';
import { getAllProjects, createProject } from '@/lib/db';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const projects = await getAllProjects();
    return new Response(JSON.stringify(projects), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('GET /api/projects error:', error && (error.stack || error.message || error));
    return new Response(JSON.stringify({ error: String(error && (error.message || error) || 'Unknown error') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const projectId = await createProject(data);
    return new Response(JSON.stringify({ id: projectId }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('POST /api/projects error:', error && (error.stack || error.message || error));
    return new Response(JSON.stringify({ error: String(error && (error.message || error) || 'Unknown error') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};