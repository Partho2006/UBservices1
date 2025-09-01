"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  const projects = [
    {
      title: "The Golden Spoon Restaurant",
      category: "Full Service Design",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
      description: "Complete interior redesign with custom kitchen setup"
    },
    {
      title: "Oceanview Resort Hotel",
      category: "Consulting & Design",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070",
      description: "Operational optimization and lobby renovation"
    },
    {
      title: "Urban Bistro Chain",
      category: "Multi-location Consulting",
      image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2070",
      description: "Standardized operations across 12 locations"
    },
  ];

  return (
    <section id="portfolio" className="py-8 lg:py-24 bg-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 hover:text-amber-400 transition-colors duration-300">
            Our <span className="text-amber-400">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Showcasing successful transformations and partnerships across the hospitality industry
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden h-120 bg-slate-800 hover:bg-slate-900 border border-slate-700 hover:border-amber-500 transition-colors duration-300 shadow-lg">
                <CardContent className="p-0 relative">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <ExternalLink className="w-5 h-5 text-slate-800" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 hover:text-amber-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-slate-400 mb-6">
            Ready to see your vision come to life?
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
