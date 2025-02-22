'use client';

import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow-md">
        <div className="flex-grow flex justify-center">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-blue-500 dark:text-blue-300">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">About</Link></li>
            <li><Link href="/projects" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Projects</Link></li>
            <li><Link href="/uses" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">Uses</Link></li>
          </ul>
        </div>
        <ThemeToggle className="ml-auto" />
      </nav>

      {/* Main Content Layout */}
      <div className="max-w-4xl mx-auto mt-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column (Profile & Blog) */}
        <main className="md:col-span-2 space-y-8">
          {/* Profile Section */}
          <header className="flex items-center space-x-4">
            {/* Avitar */}
            <div className="w-16 h-16 p-0.5 bg-white/90 rounded-full shadow-[0px_10px_15px_-3px_rgba(39,39,41,0.05)] shadow-[0px_4px_6px_-4px_rgba(39,39,41,0.05)] flex-col justify-center items-center flex">
              <div className="h-[60px] justify-center items-center inline-flex">
                <img className="w-[60px] h-[60px] rounded-[32px]" src="/Illustration/Mell.jpg" alt="Mell" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold">Software engineer, father, and believer</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi...
              </p>
            </div>
          </header>

          {/* Blog Posts */}
          <section className="space-y-6">
            {[1, 2, 3].map((post) => (
              <article key={post} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <div className="h-6 justify-start items-center gap-3 inline-flex overflow-hidden">
                  <svg width="2" height="16" viewBox="0 0 2 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="2" height="16" rx="1" fill="#E4E4E7"/>
                  </svg>
                <p className="text-gray-500 dark:text-gray-400 text-sm">December 25, 2023</p>
                </div>
                <h3 className="text-lg font-semibold mt-2">Lorem ipsum dolor sit amet</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <Link href="#" className="text-blue-500 dark:text-blue-300 mt-2 inline-block">Read article →</Link>
              </article>
            ))}
          </section>
        </main>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Newsletter */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="h-6 justify-start items-center gap-3 inline-flex overflow-hidden">
              <img src="/Icon/Mail.svg" alt="Mail Icon" width={24} height={24} />
              <h3 className="text-lg font-semibold">Stay up to date</h3> 
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Get notified when I publish something new, and unsubscribe at any time.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 border dark:bg-gray-700 dark:border-gray-600 rounded-l"
              />
              <button className="bg-black text-white px-4 rounded-r">Join</button>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="h-6 justify-start items-center gap-3 inline-flex overflow-hidden">
              <img src="/Icon/Briefcase.svg" alt="Briefcase Icon" width={24} height={24} />
              <h3 className="text-lg font-semibold">Work</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { company: 'Slack', role: 'Software Engineer', years: '2016 - Present', image: 'Slack'},
                { company: 'Spotify', role: 'Software Engineer', years: '2014 - 2015', image: 'Spotify'},
                { company: 'Audible', role: 'Software Engineer', years: '2012 - 2013', image: 'Audible'},
                { company: 'Microsoft', role: 'Software Engineer', years: '2010 - 2011', image: 'Microsoft'}
              ].map((job, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <img src={`/Logo/${job.image}.svg`} alt="X Logo" width={24} height={24} />
                  <span className="font-semibold">{job.company}</span>
                  <span className="text-gray-500 dark:text-gray-400">{job.role} ({job.years})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="h-6 justify-start items-center gap-3 inline-flex overflow-hidden">
              <img src="/Icon/Bolt.svg" alt="Lightning-bolt Icon" width={24} height={24} />
              <h3 className="text-lg font-semibold">Skills</h3>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { skill: 'HTML', level: '90%', color: 'bg-red-500' },
                { skill: 'CSS', level: '85%', color: 'bg-blue-500' },
                { skill: 'JavaScript', level: '80%', color: 'bg-yellow-500' }
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-medium">
                    <span>{skill.skill}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className={`${skill.color} h-2 rounded-full`} style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
