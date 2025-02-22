'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/footer';
import Paragraph from '@/components/paragraph';
import range from '@/tools/range';

export default function ProjectsPage() {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">About</Link></li>
            <li><Link href="/projects" className="text-blue-500 dark:text-blue-300">Projects</Link></li>
            <li><Link href="/uses" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Uses</Link></li>
          </ul>
        </div>
        <ThemeToggle />
      </nav>

      <main className="max-w-5xl mx-auto p-12">
        <div className="w-[672px] flex-col justify-start items-start gap-6 inline-flex">
          <h1 className="text-4xl font-bold">Things I’ve made trying to put my dent in the universe.</h1>
          <Paragraph />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {range(0,6).map((project) => (
            <div key={project} className="p-6 border rounded-lg shadow-md dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <img src="/Logo/fake.svg" alt="Generic Logo" className="w-10 h-10 rounded-full" />
                <h3 className="text-lg font-bold">Personal Project</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                I have made a lot of personal projects, most of them with swift and SwiftUI. I've had a lot of fun doing that sort of thing. I've made a few apps here, a few games there. What's really fun for me is when I get an idea that I want to see built, or when I discover something new that makes me go "what can I do with this?" I love messing around and doing that sort of thing.
              </p>
              <div className="h-11 py-2 justify-center items-center gap-1 inline-flex">
                <img src="/Icon/link.png" alt="Link" className="w-5 h-5"/>
                <Link href="#" className="text-blue-500 dark:text-blue-300 mt-3 inline-block">
                  https://company.com
                </Link>
            </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
