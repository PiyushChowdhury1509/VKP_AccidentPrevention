'use client';
import { useState } from 'react';

const UploadForm = () => {
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [description, setDescription] = useState("");
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);

    const urls = selectedFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls((prevUrls) => [...prevUrls, ...urls]);
  };

  const handleAddFiles = (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const file of files) {
      formData.append('file', file);
    }
    formData.append('description', description);

    const response = await fetch('/api/uploadFiles', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    console.log(data); 
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen p-8 space-y-8">

      {/* Top Section */}
      <br/>
      <br/>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-400">Accident Reporting</h1>
        <p className="text-gray-400 mt-2">
          Use this form to report accidents by uploading relevant photos, videos, and descriptions.
        </p>
      </div>

      {/* Upload and Preview Section */}
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">

        {/* Upload Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md flex-1">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Upload Images</h2>
          <p className="text-gray-400 mb-4">Please upload relevant images that describe the accident.</p>
          <button
            onClick={handleAddFiles}
            className="w-full bg-purple-700 hover:bg-purple-600 text-yellow-200 font-bold py-2 px-4 rounded transition duration-300 mb-4"
          >
            Add Images
          </button>
          
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            multiple
            capture="environment" 
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="mb-4">
            <label className="block text-gray-400 text-lg font-semibold mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              className="w-full p-3 border rounded bg-gray-700 text-gray-200 h-32 resize-none"
              placeholder="Describe the content..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-purple-700 hover:bg-purple-600 text-yellow-200 font-bold py-2 px-4 rounded transition duration-300"
          >
            Upload
          </button>
        </div>
        
        {/* Preview Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md flex-1">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Uploaded Photos</h2>
          <div className="flex flex-wrap gap-4">
            {previewUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Preview ${index}`}
                className="w-32 h-32 object-cover rounded-lg border border-gray-700"
              />
            ))}
          </div>
        </div>

      </div>

      {/* Information Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Why is this Important?</h2>
        <p className="text-gray-400">
          Reporting accidents promptly can save lives. Your reports help ensure that the right services are notified and can respond quickly.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-yellow-400">FAQs</h2>
        <div className="space-y-4">
          <div>
            <button
              className="w-full text-left text-lg font-bold bg-gray-700 p-3 rounded transition duration-300 hover:bg-gray-600"
              onClick={() => toggleFAQ(0)}
            >
              What information do I need to provide?
            </button>
            {activeFAQ === 0 && (
              <p className="text-gray-400 mt-2">
                You should provide any photos, videos, or voice recordings that describe the accident, along with a written description.
              </p>
            )}
          </div>
          <div>
            <button
              className="w-full text-left text-lg font-bold bg-gray-700 p-3 rounded transition duration-300 hover:bg-gray-600"
              onClick={() => toggleFAQ(1)}
            >
              How long does the reporting process take?
            </button>
            {activeFAQ === 1 && (
              <p className="text-gray-400 mt-2">
                The process typically takes a few minutes, depending on the amount of information you're providing.
              </p>
            )}
          </div>
          <div>
            <button
              className="w-full text-left text-lg font-bold bg-gray-700 p-3 rounded transition duration-300 hover:bg-gray-600"
              onClick={() => toggleFAQ(2)}
            >
              What happens after I submit my report?
            </button>
            {activeFAQ === 2 && (
              <p className="text-gray-400 mt-2">
                Your report will be reviewed by our team, and you will be contacted if more information is needed.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-yellow-400">Company</h4>
              <ul className="mt-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>News</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-yellow-400">Products</h4>
              <ul className="mt-2 text-gray-400">
                <li>Accident Reporting</li>
                <li>Insurance Claims</li>
                <li>Safety Resources</li>
                <li>Roadside Assistance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-yellow-400">Resources</h4>
              <ul className="mt-2 text-gray-400">
                <li>Blog</li>
                <li>Community</li>
                <li>Support</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-yellow-400">Legal</h4>
              <ul className="mt-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UploadForm;
