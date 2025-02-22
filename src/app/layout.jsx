import { ThemeProvider } from 'next-themes';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${roboto.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
    </body>
    </html>
  );
}
