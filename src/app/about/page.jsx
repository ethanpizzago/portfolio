'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/footer';
import Paragraph from '@/components/paragraph';
import range from '@/tools/range';

export default function AboutPage() {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Home</Link></li>
            <li><Link href="/about" className="text-blue-500 dark:text-blue-300">About</Link></li>
            <li><Link href="/projects" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Projects</Link></li>
            <li><Link href="/uses" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Uses</Link></li>
          </ul>
        </div>
        <ThemeToggle />
      </nav>

      <main className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 p-12">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold">I’m Ethan! I'm a student at Ensign College in Salt Lake City.</h2>
          {range(0,5).map((paragraphNumber) => (
            <div key={paragraphNumber} className="mt-4">
              <Paragraph key={paragraphNumber} />
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="/Illustration/EnsignBuilding.jpeg"
            alt="Ensign College, a school in Salt Lake City"
            className="w-full h-auto rounded-xl shadow-md"
          />
          {/* Social Links */}
          <div className="mt-6 space-y-3">
            <p className="flex items-center space-x-2">
              <img src="/Icon/X.svg" alt="X Logo" width={24} height={24} /> <Link href="#" className="text-blue-500 dark:text-blue-300">Follow me on X</Link>
            </p>
            <p className="flex items-center space-x-2">
              <img src="/Icon/GitHub.svg" alt="X Logo" width={24} height={24} /> <Link href="#" className="text-blue-500 dark:text-blue-300">Follow me on GitHub</Link>
            </p>
            <p className="flex items-center space-x-2">
              <img src="/Icon/LinkedIn.svg" alt="X Logo" width={24} height={24} /> <Link href="#" className="text-blue-500 dark:text-blue-300">Follow me on LinkedIn</Link>
            </p>
          </div>

          {/* Email Contact */}
          <div className="h-11 mt-6 pt-4 py-2 border-t justify-center items-center gap-1 inline-flex">
            <img src="/Icon/Mail.svg" alt="X Logo" width={24} height={24} />
            email@email.com
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
