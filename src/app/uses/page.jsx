'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/footer';
import range from '@/tools/range';

export default function UsesPage() {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">About</Link></li>
            <li><Link href="/projects" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Projects</Link></li>
            <li><Link href="/uses" className="text-blue-500 dark:text-blue-300">Uses</Link></li>
          </ul>
        </div>
        <ThemeToggle />
      </nav>

      <main className="max-w-4xl mx-auto p-12">
        <h1 className="text-4xl font-bold">Software I use, gadgets I love, <br /> and other things I recommend.</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        </p>

        {/* Uses List (Two-column layout) */}
        <div className="mt-12">
          {/* Category */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-300 dark:border-gray-700 pt-6">
            <div className="font-semibold text-lg">Workstation</div>
            <div className="md:col-span-2 space-y-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="border-b border-gray-300 dark:border-gray-700 pb-6">
                  <h3 className="text-lg font-bold">Item Name</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Development tools */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-300 dark:border-gray-700 pt-6 mt-12">
            <div className="font-semibold text-lg">Development tools</div>
            <div className="md:col-span-2 space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="border-b border-gray-300 dark:border-gray-700 pb-6">
                  <h3 className="text-lg font-bold">Item Name</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-300 dark:border-gray-700 pt-6 mt-12">
            <div className="font-semibold text-lg">Design</div>
            <div className="md:col-span-2 space-y-6">
              {['Whimsical', 'Figma'].map((item) => (
                <div key={item} className="border-b border-gray-300 dark:border-gray-700 pb-6">
                  <h3 className="text-lg font-bold">{item}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Productivity */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-300 dark:border-gray-700 pt-6 mt-12">
            <div className="font-semibold text-lg">Productivity</div>
            <div className="md:col-span-2 space-y-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="border-b border-gray-300 dark:border-gray-700 pb-6">
                  <h3 className="text-lg font-bold">Item Name</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
