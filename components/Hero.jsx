"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 mt-16"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
          alt="Classic fine dining interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 leading-snug"
        >
          Crafting Timeless Hospitality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We blend tradition and innovation to design experiences that embody
          elegance, warmth, and unforgettable service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={scrollToServices}
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 text-lg font-semibold rounded-none uppercase tracking-wide"
          >
            Discover Our Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="border-2 hover:bg-white/70  bg-white/60 text-slate-900 px-8 py-4 text-lg font-semibold rounded-none uppercase tracking-wide"
          >
            Schedule a Consultation
          </Button>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="h-px w-full bg-amber-600" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.8 },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12"
        >
          {[
            { value: "500+", label: "Projects Realized" },
            { value: "15+", label: "Years of Legacy" },
            { value: "92%", label: "Client Loyalty" },
            { value: "24/7", label: "Guest Assistance" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-serif text-amber-400 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-300 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
