import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 📞 Info Panel */}
        <div className="bg-white p-5 sm:p-6 rounded-xl shadow space-y-6">
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">
              📞 Call To Us
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              We are available 24/7, 7 days a week.
            </p>
            <p className="mt-2 font-medium text-sm">Phone: +91 XXXXX XXXXX</p>
          </div>

          <hr />

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-2">
              ✉️ Write To Us
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="mt-2 text-xs sm:text-sm">Customer Email:</p>
            <p className="text-sm font-medium">support@cartora.com</p>
          </div>
        </div>

        {/* 📝 Form Section */}
        <div className="md:col-span-2 bg-white p-5 sm:p-6 rounded-xl shadow">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your name*"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-black outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your email*"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-black outline-none"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your phone*"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 w-full text-sm focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-black outline-none"
            />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="text-gray-600 text-sm hover:underline"
              >
                Reset
              </button>

              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg text-sm hover:bg-gray-800 active:scale-95 transition"
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
