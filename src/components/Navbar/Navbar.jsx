import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);

      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasShadow ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <nav className="flex justify-between h-16 md:h-20 items-center max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
        >
          Gr<span className="uppercase">o</span>cify
        </Link>

        {/* Desktop Menu */}
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Process", path: "/process" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                className="px-3 py-2 font-semibold tracking-wider text-gray-800 hover:text-orange-600 transition-colors duration-300"
              >
                {item.name}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-x-5">
          {/* Search (desktop only) */}
          <div className="hidden md:flex items-center border-2 border-orange-400 rounded-full overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search.."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white w-10 h-10 text-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <IoSearch />
            </button>
          </div>

          {/* Icons */}
          <a href="#">
            <FaHeart className="text-zinc-800 text-2xl hover:text-orange-500 hover:scale-125 transition-transform duration-300" />
          </a>
          <a href="#">
            <HiMiniShoppingBag className="text-zinc-800 text-2xl hover:text-orange-500 hover:scale-125 transition-transform duration-300" />
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden text-3xl text-zinc-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-16 left-0 w-full md:hidden flex flex-col items-center px-4 gap-y-6 transform transition-all duration-500 ease-in-out origin-top ${
          isOpen ? "scale-y-100 opacity-100 py-6" : "scale-y-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-y-4 p-10 w-full bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-lg rounded-lg shadow-lg">
          {["Home", "About Us", "Process", "Contact Us"].map((item) => (
            <li key={item} className="w-full text-center">
              <a
                href="#home"
                className="block w-full px-4 py-2 rounded-md font-semibold tracking-wide text-white hover:text-yellow-200 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}

          {/* Search Bar */}
          <div className="relative w-full max-w-sm flex items-center border border-white rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white w-10 h-10 text-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <IoSearch />
            </button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
