import React from "react";
import Contact from "../../assets/contact.jpg";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Banner from "../Banner/Banner";

const ContactUs = () => {
  return (
    <div>
      <Banner title="Contact Us" bgImage={Contact} />
      {/* Contact Section */}
      <section
        className="relative py-20 bg-gradient-to-b from-white via-orange-50 to-white"
        id="contact-form"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <form className="bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-orange-100 hover:shadow-2xl transition-shadow duration-300">
              <div>
                <label className="block text-lg font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="mt-2 w-full px-4 py-3 border rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="mt-2 w-full px-4 py-3 border rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="mt-2 w-full px-4 py-3 border rounded-lg focus:border-orange-400 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 
                           text-white py-3 rounded-lg font-semibold shadow-md 
                           hover:scale-105 hover:shadow-lg transition-transform duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-6 bg-white p-10 rounded-xl shadow-2xl border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <FaPhoneAlt className="text-orange-600 text-xl" />
                </div>
                <span className="text-gray-900 font-semibold hover:text-orange-600 transition-colors">
                  +91 7219657958
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <FaEnvelope className="text-orange-600 text-xl" />
                </div>
                <span className="text-gray-900 font-semibold hover:text-orange-600 transition-colors">
                  varsha@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <FaMapMarkerAlt className="text-orange-600 text-xl" />
                </div>
                <span className="text-gray-900 font-semibold hover:text-orange-600 transition-colors">
                  Thane, Maharashtra, India
                </span>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Social Links */}
              <div className="flex gap-8 justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors transform hover:scale-110"
                >
                  <FaLinkedin className="text-2xl text-blue-600" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors transform hover:scale-110"
                >
                  <FaGithub className="text-2xl text-zinc-800" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
