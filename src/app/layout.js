// src/app/layout.js
import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <nav className="flex justify-center space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/cybersecurity" className="hover:underline">Cybersecurity</a>
            <a href="/networking" className="hover:underline">Networking</a>
            <a href="/education" className="hover:underline">Education</a>
            <a href="/experience" className="hover:underline">Experience</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
