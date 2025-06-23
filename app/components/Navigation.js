"use client";
import Link from "next/link";
import { BotMessageSquare, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Glossary", path: "/glossary" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-900 shadow-lg py-2" : "bg-blue-900 py-4"
      }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="text-2xl font-bold hover:text-blue-200 flex items-center space-x-2">
          <BotMessageSquare size={28} className="text-white" />
          <span className="text-white">Agent Shelf</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-white hover:text-blue-200">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 mx-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
