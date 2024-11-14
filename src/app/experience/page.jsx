// src/app/experience/page.jsx
export default function ExperiencePage() {
  return (
    <section className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Experience</h2>
      <ul className="space-y-4 max-w-3xl mx-auto">
        <li>
          <h3 className="text-xl font-semibold">Cybersecurity Analyst</h3>
          <p className="text-gray-700">Company Name, Duration</p>
          <p>Responsibilities and achievements in this role.</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">Networking Intern</h3>
          <p className="text-gray-700">Company Name, Duration</p>
          <p>Responsibilities and achievements in this role.</p>
        </li>
        {/* Add more experience */}
      </ul>
    </section>
  );
}
