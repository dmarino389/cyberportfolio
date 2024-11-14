// src/app/contact/page.jsx
export default function ContactPage() {
  return (
    <section className="min-h-screen p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="mt-1 block w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea className="mt-1 block w-full px-3 py-2 border rounded" rows="4"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </section>
  );
}
