import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Logo + About */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="text-xl sm:text-2xl font-bold mb-3">
            CARTORA
          </Link>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Your one-stop destination for fashion, electronics, and more. Shop
            smart, live better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menswear" className="hover:text-white transition">
                Menswear
              </Link>
            </li>
            <li>
              <Link to="/womenswear" className="hover:text-white transition">
                Womenswear
              </Link>
            </li>
            <li>
              <Link to="/mobiles" className="hover:text-white transition">
                Mobiles
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">Support</h3>
          <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
            <li>
              <Link to="/contact" className="hover:text-white cursor-pointer">
                Contact Us
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-semibold mb-3 text-sm sm:text-base">
            Stay Updated
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-3">
            Subscribe to get latest deals & offers.
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 w-full text-black rounded-md sm:rounded-l-md sm:rounded-r-none outline-none text-sm"
            />
            <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md">
              follow us
              <FaFacebook />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-xs sm:text-sm px-4">
        © {new Date().getFullYear()} Cartora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
