"use client"
import React, { useState } from 'react';

const LandingPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState({
    photos: [],
    videos: [],
    voiceNotes: [],
    info: ''
  });

  const handleFileChange = (e, type) => {
    setUploadedFiles({ ...uploadedFiles, [type]: [...uploadedFiles[type], ...e.target.files] });
  };

  const handleInfoChange = (e) => {
    setUploadedFiles({ ...uploadedFiles, info: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Report an Accident</h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        Upload your photos, videos, voice notes, and written information to help us understand the incident.
      </p>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <label className="block text-gray-700 text-xl font-bold mb-2">Upload Photos</label>
          <input type="file" accept="image/*" multiple onChange={(e) => handleFileChange(e, 'photos')} className="w-full p-2 border rounded"/>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-xl font-bold mb-2">Upload Videos</label>
          <input type="file" accept="video/*" multiple onChange={(e) => handleFileChange(e, 'videos')} className="w-full p-2 border rounded"/>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-xl font-bold mb-2">Upload Voice Notes</label>
          <input type="file" accept="audio/*" multiple onChange={(e) => handleFileChange(e, 'voiceNotes')} className="w-full p-2 border rounded"/>
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-xl font-bold mb-2">Written Information</label>
          <textarea value={uploadedFiles.info} onChange={handleInfoChange} className="w-full p-2 border rounded h-32"></textarea>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded font-bold">Submit Report</button>
      </div>
    </div>
  );
};

export default LandingPage;
