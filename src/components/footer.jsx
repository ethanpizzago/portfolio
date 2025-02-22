import Link from 'next/link';

const Footer = () => {
  return (
        <footer className="mt-12 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
            <ul className="flex justify-center space-x-6">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li><Link href="/projects" className="hover:underline">Projects</Link></li>
                <li><Link href="/uses" className="hover:underline">Uses</Link></li>
            </ul>
            <p className="mt-2">© 2024 John Doe. All rights reserved.</p>
        </footer>
  );
}

export default Footer;