import type { APIRoute } from 'astro';
import { getProject, updateProject, deleteProject } from '@/lib/db';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const projectId = parseInt(params.id!);
    const project = await getProject(projectId);
    if (!project) {
      return new Response(JSON.stringify({ error: 'Project not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify(project), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('GET /api/projects/:id error:', error && (error.stack || error.message || error));
    return new Response(JSON.stringify({ error: String(error && (error.message || error) || 'Unknown error') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const PUT: APIRoute = async ({ params, request }) => {
  try {
    const projectId = parseInt(params.id!);
    const data = await request.json();
    await updateProject(projectId, data);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('PUT /api/projects/:id error:', error && (error.stack || error.message || error));
    return new Response(JSON.stringify({ error: String(error && (error.message || error) || 'Unknown error') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const projectId = parseInt(params.id!);
    await deleteProject(projectId);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('DELETE /api/projects/:id error:', error && (error.stack || error.message || error));
    return new Response(JSON.stringify({ error: String(error && (error.message || error) || 'Unknown error') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};