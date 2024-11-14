// src/app/page.jsx
export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      {/* Profile Section */}
      <section className="flex flex-col items-center text-center mb-10">
        <img
          src="/cyberpicture.jpg"  // Path to the image in the public folder
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
        <h1 className="text-5xl font-bold mt-4">My Portfolio</h1>
        <p className="text-lg text-gray-700 mt-2 max-w-2xl">
          Welcome to my cybersecurity portfolio! Explore my projects, experience, and education in the field of cybersecurity and networking.
        </p>
      </section>

      {/* Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <a href="/cybersecurity" className="bg-blue-500 text-white p-6 rounded-lg shadow hover:bg-blue-600 transition duration-300">
          Cybersecurity Projects
        </a>
        <a href="/networking" className="bg-green-500 text-white p-6 rounded-lg shadow hover:bg-green-600 transition duration-300">
          Networking Projects
        </a>
        <a href="/education" className="bg-yellow-500 text-white p-6 rounded-lg shadow hover:bg-yellow-600 transition duration-300">
          Education
        </a>
        <a href="/experience" className="bg-purple-500 text-white p-6 rounded-lg shadow hover:bg-purple-600 transition duration-300">
          Experience
        </a>
        <a href="/contact" className="bg-red-500 text-white p-6 rounded-lg shadow hover:bg-red-600 transition duration-300">
          Contact
        </a>
      </div>
    </main>
  );
}
