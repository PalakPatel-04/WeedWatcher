"use client";
import Navbar from "@/components/layout/navbar";
import Head from 'next/head';
import { useContext, useState } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { ThemeContext } from "@/context/ThemeContext";
import ProtectedRoute from '@/components/ProtectedRoute';
import { useRouter } from 'next/navigation';

const Home = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext); // Light or Dark
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <ProtectedRoute>
        <Navbar />
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Head>
            <title>WeedWatcher</title>
            <meta name="description" content="Upload images of plants in your garden, identify unwanted weeds, and get information about potential diseases and solutions." />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className="flex-grow">
            {/* Hero Section */}
            <section className="text-center py-16 px-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-6">Identify Weeds & Get Solutions</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                  Upload images of weeds in your garden and get
                  information about potential diseases and solutions.
                </p>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
                  onClick={() => router.push('/upload')}
                >
                  Get Started
                </button>
              </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 px-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Upload",
                      desc: "Take a photo or upload an image of the plant you want to identify.",
                      iconPath: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    },
                    {
                      title: "Identify",
                      desc: "Our system will identify the plant and provide detailed information.",
                      iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    },
                    {
                      title: "Track",
                      desc: "View your history and keep track of all your identified plants.",
                      iconPath: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    },
                  ].map((step, index) => (
                    <div key={index} className="border rounded-lg p-8 text-center border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                      <div className="bg-green-100 dark:bg-green-900 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.iconPath} />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {[
                    {
                      title: "Weed Identification",
                      desc: "Quickly identify unwanted weeds in your garden to take proper action.",
                      iconPath: "M5 13l4 4L19 7"
                    },
                    {
                      title: "Disease Detection",
                      desc: "Identify plant diseases early and get recommendations for treatment.",
                      iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    },
                    {
                      title: "Care Instructions",
                      desc: "Get detailed care instructions for identified plants to help them thrive.",
                      iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    },
                    {
                      title: "History Log",
                      desc: "Track all your previously identified plants and revisit solutions anytime.",
                      iconPath: "M9 17v-2a4 4 0 018 0v2m-4 4a4 4 0 100-8 4 4 0 000 8zm0 0v-1m0 1h1m-1 0h-1"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex">
                      <div className="mr-6">
                        <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </ProtectedRoute>
    </div>
  );
};

export default Home;
