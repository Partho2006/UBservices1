"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/70 backdrop-blur-lg shadow-lg"
          : "bg-slate-900/50 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-amber-400 hover:text-amber-600 cursor-pointer transition-colors">
                U.B Services & Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="#hero" className="text-amber-400 hover:text-amber-600 font-medium transition-colors">
              Welcome
            </Link>
            <Link href="#services" className="text-amber-400 hover:text-amber-600 font-medium transition-colors">
              Our Expertise
            </Link>
            <Link href="#portfolio" className="text-amber-400 hover:text-amber-600 font-medium transition-colors">
              Showcase
            </Link>
            <Link href="#about" className="text-amber-400 hover:text-amber-600 font-medium transition-colors">
              About Us
            </Link>
            <Link href="#contact">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-amber-600 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden bg-slate-800 border-t border-slate-700 py-4 rounded-2xl mb-4 overflow-hidden shadow-md"
            >
              <div className="flex flex-col space-y-4">
                <Link
                  href="#hero"
                  onClick={() => setIsOpen(false)}
                  className="text-amber-400 hover:text-amber-600 font-medium transition-colors text-left px-4"
                >
                  Welcome
                </Link>
                <Link
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  className="text-amber-400 hover:text-amber-600 font-medium transition-colors text-left px-4"
                >
                  Our Expertise
                </Link>
                <Link
                  href="#portfolio"
                  onClick={() => setIsOpen(false)}
                  className="text-amber-400 hover:text-amber-600 font-medium transition-colors text-left px-4"
                >
                  Showcase
                </Link>
                <Link
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="text-amber-400 hover:text-amber-600 font-medium transition-colors text-left px-4"
                >
                  About Us
                </Link>
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  <Button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:bg-amber-700 text-white px-4 mx-0 w-full">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
