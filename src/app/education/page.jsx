// src/app/education/page.jsx
export default function EducationPage() {
  return (
    <section className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Education</h2>
      <ul className="space-y-4 max-w-3xl mx-auto">
        <li>
          <h3 className="text-xl font-semibold">Bachelor’s Degree in Cybersecurity</h3>
          <p className="text-gray-700">University Name, Graduation Year</p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">Certified Ethical Hacker (CEH)</h3>
          <p className="text-gray-700">Issuing Organization, Year</p>
        </li>
        {/* Add more education or certifications */}
      </ul>
    </section>
  );
}
