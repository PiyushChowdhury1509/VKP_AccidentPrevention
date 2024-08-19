'use client'
import { useState } from 'react';

const Blog2=()=>{
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100 text-gray-900 font-sans">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
                <h1 className="text-4xl font-bold text-sky-600 mb-4">Blog Post 1</h1>
                <p className="text-lg mb-6">
                    <strong className="text-sky-600">Accident Detection WebApp: Save Lives with One Tap</strong>
                    <br /><br />
                    In today's fast world, accidents can happen quickly, leaving people needing urgent help. The Accident Detection WebApp changes this with its life-saving tech. This app uses advanced emergency tech to spot accidents fast, send alerts, and help right away.
                </p>

                <h3 className="text-2xl font-semibold text-sky-600 mb-3">Key Takeaways</h3>
                <ul className="list-disc list-inside mb-6">
                    <li>The Accident Detection WebApp is a cutting-edge mobile solution that saves lives in emergency situations.</li>
                    <li>Real-time accident detection and automated emergency alerts ensure immediate assistance when it's needed most.</li>
                    <li>Innovative technology powers the app's advanced algorithms, which can detect accidents and dispatch emergency services with just one tap.</li>
                    <li>The app's seamless integration with local emergency responders ensures the fastest possible response times.</li>
                    <li>Accident Detection WebApp is a game-changer in the world of safety and emergency response technology.</li>
                </ul>

                <h3 className="text-2xl font-semibold text-sky-600 mb-3">The Life-Saving Potential of Real-Time Accident Detection</h3>
                <p className="mb-6">
                    The Accident Detection WebApp is changing how we handle emergencies. It uses new technology to save lives. At its core, it can quickly spot accidents and call for help right away.
                </p>

                {/* Additional sections omitted for brevity */}

                <h3 className="text-2xl font-semibold text-sky-600 mb-3">Feature and Benefit Summary</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <strong className="text-sky-600">Real-time Accident Detection:</strong> Immediate identification of an accident, triggering emergency alerts
                    </div>
                    <div>
                        <strong className="text-sky-600">Automatic Crash Detection:</strong> Advanced algorithms and sensors analyze data to pinpoint incident location and severity
                    </div>
                    <div>
                        <strong className="text-sky-600">One-tap Emergency Assistance:</strong> Users can quickly call for help with a single tap on their smartphone screen
                    </div>
                </div>

                {/* Additional sections omitted for brevity */}

                <div className="faq max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
                    <h2 className="text-3xl font-bold text-sky-600 mb-6">Frequently Asked Questions</h2>

                    <ul className="space-y-4">
                        {/* FAQ Item 1 */}
                        <li className="border-b border-gray-200">
                            <label
                                onClick={() => toggleAccordion(0)}
                                className="block text-lg font-semibold text-sky-600 cursor-pointer hover:bg-sky-50 p-4 rounded-lg"
                            >
                                What is the Accident Detection WebApp?
                            </label>
                            <div
                                className="content transition-all duration-300 ease-in-out"
                                style={{ maxHeight: activeIndex === 0 ? '100%' : '0px', overflow: 'hidden' }}
                            >
                                <p className="p-4">The Accident Detection WebApp is a cutting-edge mobile app. It uses new technology to save lives during emergencies. It offers real-time accident detection, sends out emergency alerts, and connects users with emergency services instantly.</p>
                            </div>
                        </li>

                        {/* FAQ Item 2 */}
                        <li className="border-b border-gray-200">
                            <label
                                onClick={() => toggleAccordion(1)}
                                className="block text-lg font-semibold text-sky-600 cursor-pointer hover:bg-sky-50 p-4 rounded-lg"
                            >
                                How does the app detect accidents in real-time?
                            </label>
                            <div
                                className="content transition-all duration-300 ease-in-out"
                                style={{ maxHeight: activeIndex === 1 ? '100%' : '0px', overflow: 'hidden' }}
                            >
                                <p className="p-4">The app uses advanced algorithms and sensors to spot accidents right away. It can sense sudden changes in motion and impact. This helps send out emergency alerts fast, making sure help gets there quickly.</p>
                            </div>
                        </li>

                        {/* FAQ Item 3 */}
                        <li>
                            <label
                                onClick={() => toggleAccordion(2)}
                                className="block text-lg font-semibold text-sky-600 cursor-pointer hover:bg-sky-50 p-4 rounded-lg"
                            >
                                What happens when the app detects an accident?
                            </label>
                            <div
                                className="content transition-all duration-300 ease-in-out"
                                style={{ maxHeight: activeIndex === 2 ? '100%' : '0px', overflow: 'hidden' }}
                            >
                                <p className="p-4">When the app senses an accident, it sends out emergency alerts right away. It tells emergency services where the accident is, so they can rush to the scene fast. The app also lets users quickly call for help with just one tap.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <a href="blogs.html" className="text-sky-600 hover:text-sky-800 underline font-medium">
                    Back to homepage
                </a>
            </div>
        </div>
    );
}
export default Blog2;
