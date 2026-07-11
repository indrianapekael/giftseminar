import type { APIRoute } from 'astro';
import { supabase } from '@/lib/db';

// Ensure this endpoint runs server-side so uploads and request headers work
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type');
    console.log('[UPLOAD] Content-Type:', contentType);

    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof File)) {
      console.log('[UPLOAD] No file found in formData or unsupported form value');
      return new Response(
        JSON.stringify({ error: 'Tidak ada file yang diunggah atau format file tidak didukung' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const imageFile = file;
    console.log('[UPLOAD] File object:', imageFile.name, imageFile.type, imageFile.size);

    const acceptedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif'];
    const fileExtension = imageFile.name.split('.').pop()?.toLowerCase() ?? '';
    const isImageType = imageFile.type.startsWith('image/');
    const isImageExtension = acceptedExtensions.includes(fileExtension);

    if (!isImageType && !isImageExtension) {
      return new Response(
        JSON.stringify({ error: 'File harus berupa gambar (JPG, PNG, WebP, GIF, AVIF)' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ error: 'Ukuran file maksimal 5MB' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!supabase) {
      throw new Error("Supabase client tidak diinisialisasi. Cek .env file.");
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const originalName = file.name.replace(/[^a-z0-9.-]/gi, '_').toLowerCase();
    const filename = `${timestamp}-${randomString}-${originalName}`;

    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Upload to Supabase Storage bucket named 'upload'
    const { data, error } = await supabase.storage
      .from('upload')
      .upload(filename, buffer, {
        contentType: imageFile.type,
        upsert: false
      });

    if (error) {
      console.error('Supabase upload error:', error);
      throw new Error(`Gagal mengunggah ke Supabase: ${error.message}`);
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from('upload')
      .getPublicUrl(filename);

    const publicUrl = publicUrlData.publicUrl;

    return new Response(JSON.stringify({ url: publicUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Upload error:', error);
    return new Response(
      JSON.stringify({ error: 'Gagal mengunggah gambar: ' + error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
