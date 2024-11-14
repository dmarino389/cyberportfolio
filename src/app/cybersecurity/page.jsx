// src/app/cybersecurity/page.jsx
export default function CybersecurityPage() {
  return (
    <section className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Cybersecurity Projects</h2>
      <ul className="space-y-4 max-w-3xl mx-auto">
        <li>
          <a href="#" className="text-blue-600 hover:underline">Project 1: Vulnerability Assessment</a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">Project 2: Packet Tracer Simulation</a>
        </li>
        {/* Add more projects */}
      </ul>
    </section>
  );
}
