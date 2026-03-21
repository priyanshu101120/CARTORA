import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-6">
        {/* Left Info Panel */}
        <div className="bg-white p-6 rounded-xl shadow space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">📞 Call To Us</h3>
            <p className="text-sm text-gray-600">
              We are available 24/7, 7 days a week.
            </p>
            <p className="mt-2 font-medium">Phone: </p>
          </div>

          <hr />

          <div>
            <h3 className="font-semibold text-lg mb-2">✉️ Write To Us</h3>
            <p className="text-sm text-gray-600">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="mt-2 text-sm">Customer Email:</p>
            <p className="text-sm font-medium">support@Cartora.com</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name*"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-red-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your email*"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-red-500"
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Your phone*"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500"
            />

            <div className="flex justify-end items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  setFormData({ name: "", email: "", phone: "", message: "" })
                }
                className="text-gray-600 hover:underline"
              >
                Reset
              </button>

              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
