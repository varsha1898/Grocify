import React from "react";
import { FaHome, FaInfoCircle, FaShoppingCart, FaCogs } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">
      {/* Top Section: Brand + Newsletter */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 border-b border-slate-700">
        {/* Brand */}
        <div className="text-center lg:text-left">
          <a
            href="/"
            className="text-3xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
          >
            Gr<span className="uppercase">o</span>cify
          </a>
          <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 text-gray-400 italic tracking-wide">
            <span className="font-semibold text-white">Fresh, organic,</span>{" "}
            and sustainable groceries
            <span className="text-orange-400 font-medium">
              {" "}
              delivered straight to your doorstep.
            </span>
          </p>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center lg:items-end">
          <h3 className="text-xl font-bold text-white mb-4 tracking-wide text-center lg:text-right">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-400 text-sm mb-6 max-w-sm text-center lg:text-right">
            Get the latest updates, offers, and fresh arrivals delivered
            straight to your inbox.
          </p>
          <div className="flex w-full max-w-sm shadow-lg rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 w-full bg-slate-800 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Links + Contact + Social */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 tracking-wide border-b-2 border-orange-500 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Home", icon: <FaHome /> },
              { name: "About Us", icon: <FaInfoCircle /> },
              { name: "Products", icon: <FaShoppingCart /> },
              { name: "Process", icon: <FaCogs /> },
              { name: "Contact", icon: <FaPhoneAlt /> },
            ].map((link) => (
              <li
                key={link.name}
                className="group flex items-center gap-3 justify-center sm:justify-start"
              >
                <span className="text-orange-400 text-lg group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </span>
                <a
                  href="#"
                  className="relative text-gray-300 hover:text-orange-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 tracking-wide border-b-2 border-orange-500 inline-block pb-1">
            Contact Us
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 justify-center sm:justify-start group">
              <span className="text-orange-400 text-lg group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt />
              </span>
              <p className="text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
                123 Organic Street, Thane, India
              </p>
            </li>
            <li className="flex items-center gap-3 justify-center sm:justify-start group">
              <span className="text-orange-400 text-lg group-hover:scale-110 transition-transform duration-300">
                <FaPhoneAlt />
              </span>
              <p className="text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
                +91 7219534077
              </p>
            </li>
            <li className="flex items-center gap-3 justify-center sm:justify-start group">
              <span className="text-orange-400 text-lg group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope />
              </span>
              <p className="text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
                Varsha@grocify.com
              </p>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 tracking-wide border-b-2 border-orange-500 inline-block pb-1">
            Follow Us
          </h3>
          <div className="flex gap-5 justify-center sm:justify-start">
            {[
              { icon: <FaFacebookF />, label: "Facebook" },
              { icon: <FaInstagram />, label: "Instagram" },
              { icon: <FaTwitter />, label: "Twitter" },
              { icon: <FaLinkedin />, label: "LinkedIn" },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className="group relative w-12 h-12 flex items-center justify-center rounded-full 
                  bg-gradient-to-br from-slate-800 to-slate-700 text-gray-300 
                  hover:from-orange-500 hover:to-red-500 hover:text-white 
                  shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {social.icon}
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs text-gray-200 bg-slate-700 px-2 py-1 rounded-md transition duration-300">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700 text-center py-5 text-sm text-gray-400 relative">
        <p className="tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Grocify
          </span>
          . All rights reserved.
        </p>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-[2px] bg-orange-500 rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
