"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Globe, TrendingUp, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Multiple awards for design excellence and operational innovation"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Seasoned professionals with decades of hospitality experience"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across multiple countries and cultures"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Average 40% increase in client revenue post-implementation"
    }
  ];

  return (
    <section id="about" className="py-8 bg-slate-900 mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 hover:text-amber-400 transition-colors duration-300">
          About <span className="text-amber-400">Us</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          Dedicated to redefining hospitality with innovation, integrity, and a passion
          for creating exceptional experiences for our clients and their guests.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-amber-400 mb-8 hover:text-amber-600 transition-colors duration-300">
              U.B Services & Consultancy
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                For over 15 years, we've been the trusted partner for hospitality businesses
                seeking to elevate their operations, design, and customer experiences. Our
                comprehensive approach combines strategic consulting, premium products, and
                stunning design to create unforgettable hospitality environments.
              </p>

              <p>
                From intimate neighborhood cafes to luxury resort hotels, we understand that
                every hospitality business has unique needs. Our team of industry experts
                brings deep knowledge across operations, design, and procurement to deliver
                solutions that not only meet but exceed your expectations.
              </p>

              <p>
                What sets us apart is our commitment to understanding your vision and
                translating it into tangible results. We don't just provide services –
                we build lasting partnerships that grow with your business.
              </p>
            </div>

            {/* Key Numbers */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-slate-700">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
                <div className="text-slate-400 font-medium">Happy Clients</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-amber-400 mb-2">15+</div>
                <div className="text-slate-400 font-medium">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievements */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 hover:bg-white/10 border-slate-700 hover:border-amber-600 transition-colors duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 hover:text-amber-200 transition-colors duration-300 group">
                          {achievement.title}
                        </h3>
                        <p className="text-slate-400 hover:text-white transition-colors duration-300">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
