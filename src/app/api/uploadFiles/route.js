import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function parseFormData(req) {
  const formData = await req.formData();
  const files = formData.getAll('file'); 
  return files;
}

export const POST = async (req) => {
  try {
    const files = await parseFormData(req);

    const uploadFile = async (file) => {
      const arrayBuffer = await file.arrayBuffer(); 
      const buffer = Buffer.from(arrayBuffer);

      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.v2.uploader.upload_stream(
          { resource_type: 'image', folder: 'accidents' },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result.secure_url); 
            }
          }
        );

        uploadStream.end(buffer);
      });
    };

    const uploadPromises = files.map(uploadFile);
    const urls = await Promise.all(uploadPromises);
    console.log(urls);
    return NextResponse.json({ urls });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Failed to upload files' }, { status: 500 });
  }
};
