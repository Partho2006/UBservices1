import React from "react";
import { ChefHat, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                U.B Services & Consultancy
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming hospitality dreams into reality through expert
              consulting, premium products, and exceptional design.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Restaurant Consulting
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Hotel Consulting
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Kitchen Equipment
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Exterior Design
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="#hero"
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-amber-400 transition-colors"
                >
                  Showcase
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-amber-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <a
                  href="tel:+919831718463"
                  className="text-sm hover:text-amber-400 transition-colors duration-300"
                >
                  +91 9831718463
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a
                  href="mailto:ujjalroychowdhury084@gmail.com"
                  className="text-sm hover:text-amber-400 transition-colors duration-300"
                >
                  ujjalroychowdhury084@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5" />
                <span className="text-sm hover:text-amber-400 transition-colors duration-300">
                  44/5, Sikdar Para, Behala, Kolkata, West Bengal 700034, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 U.B Services & Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy"
              className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
