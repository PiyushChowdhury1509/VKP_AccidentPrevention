/*<style>
    body {
        font-family: 'Open Sans', sans-serif;
    }
    h2, h3, h4 {
        font-family: 'Helvetica', sans-serif;
    }
    p {
        font-family: 'Georgia', serif;
    }
</style> */
//<link href="https://fonts.googleapis.com/css2?family=Georgia&family=Helvetica&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const MainBlog=()=>{
    const router=useRouter();
  return (
    <div className="text-gray-800">
      <nav className="bg-sky-700 p-4">
        <div className="flex items-center justify-between">
          <div className="h-20 w-28">
            <img className="" src="unblured.jpeg" alt="proj" />
          </div>
          <div className="space-x-4">
            <button className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-500 transition">Home</button>
            <button className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-500 transition">Authors</button>
            <button className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-500 transition">References</button>
          </div>
        </div>
      </nav>

      <div className="text-center py-16 px-4 bg-sky-100">
        <h4 className="text-sky-600 text-xl">Our Blogs</h4>
        <h2 className="text-4xl font-bold text-sky-800 my-4">TapShield Journal</h2>
        <p className="text-lg mb-8">The TapShield Journal features interactive blog posts</p>
        <form action="#" className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input 
            type="email" 
            placeholder="Your Email address" 
            required 
            className="p-2 w-72 border border-sky-300 rounded" 
          />
          <button type="submit" className="bg-sky-600 text-white py-2 px-6 rounded hover:bg-sky-500 transition">Get Started</button>
        </form>
      </div>

      <div className="py-8 px-4">
        <h3 className="text-2xl text-sky-700 mb-6">Recent Blog Posts</h3>
        <ul className="space-y-4">
          <li>
            <a onClick={()=>router.push('/blogs/savelives')} className="text-sky-800 text-lg font-semibold hover:text-sky-600 transition">
              Saving Lives Through One Tap
            </a>
          </li>
          <li>
            <a onClick={()=>router.push('/blogs/aisafety')} className="text-sky-800 text-lg font-semibold hover:text-sky-600 transition">
              AI Safety: Accident Detection & Real-Time Alerts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainBlog
