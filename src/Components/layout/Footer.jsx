import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-black text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">CARTORA</h2>
          <p className="text-gray-400 text-sm">
            Your one-stop destination for fashion, electronics, and more. Shop
            smart, live better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menswear">Menswear</Link>
            </li>
            <li>
              <Link to="/womenswear">Womenswear</Link>
            </li>
            <li>
              <Link to="/mobiles">Mobiles</Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to get latest deals & offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 w-full text-black rounded-l-md outline-none"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Cartora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
