"use client";
import React, { useState } from "react";

const LandingPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState({
    photos: [],
    videos: [],
    voiceNotes: [],
    info: "",
  });

  const handleFileChange = (e, type) => {
    setUploadedFiles({
      ...uploadedFiles,
      [type]: [...uploadedFiles[type], ...e.target.files],
    });
  };

  const handleInfoChange = (e) => {
    setUploadedFiles({ ...uploadedFiles, info: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold">Report an Accident</h1>
        <p className="text-lg mt-2">
          If you've been involved in an accident, please provide the details
          below so we can assist you.
        </p>
        <button className="mt-4 bg-white text-blue-600 font-bold py-2 px-4 rounded">
          Report Accident
        </button>
      </div>

      {/* Upload Sections */}
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mt-8">
        <div className="mb-8">
          <label className="block text-gray-700 text-xl font-bold mb-2">
            Upload Photos
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(e, "photos")}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-xl font-bold mb-2">
            Upload Videos
          </label>
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={(e) => handleFileChange(e, "videos")}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-xl font-bold mb-2">
            Record Audio
          </label>
          <input
            type="file"
            accept="audio/*"
            multiple
            onChange={(e) => handleFileChange(e, "voiceNotes")}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-xl font-bold mb-2">
            Accident Description
          </label>
          <textarea
            value={uploadedFiles.info}
            onChange={handleInfoChange}
            className="w-full p-2 border rounded h-32"
            placeholder="Describe what happened..."
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded font-bold w-full">
          Submit Report
        </button>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center mb-4">FAQs</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold">What information do I need to provide?</h3>
            <p className="text-gray-600">
              You should provide any photos, videos, or voice recordings that describe the accident, along with a written description.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">How long does the reporting process take?</h3>
            <p className="text-gray-600">
              The process typically takes a few minutes, depending on the amount of information you're providing.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold">What happens after I submit my report?</h3>
            <p className="text-gray-600">
              Your report will be reviewed by our team, and you will be contacted if more information is needed.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100 mt-12 py-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold">Company</h4>
              <ul className="mt-2 text-gray-600">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>News</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Products</h4>
              <ul className="mt-2 text-gray-600">
                <li>Accident Reporting</li>
                <li>Insurance Claims</li>
                <li>Safety Resources</li>
                <li>Roadside Assistance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Resources</h4>
              <ul className="mt-2 text-gray-600">
                <li>Blog</li>
                <li>Community</li>
                <li>Support</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Legal</h4>
              <ul className="mt-2 text-gray-600">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
