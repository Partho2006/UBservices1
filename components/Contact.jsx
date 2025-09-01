
"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "ujjalroychowdhury084@gmail.com",
      link: "mailto:ujjalroychowdhury084@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "9831718463",
      link: "tel:+919831718463"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "44/5, Sikdar Para, Behala, Kolkata, West Bengal 700034, India",
      link: "https://www.google.com/maps/place/Kolkata,+West+Bengal"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-8 px-2 md:px-6 relative z-10 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 hover:text-amber-400 transition-colors duration-300">
            Get In <span className="text-amber-400">Touch</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Dedicated to redefining hospitality with innovation, integrity, and a passion
            for creating exceptional experiences for our clients and their guests.
          </p>
        </motion.div>


        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-2 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2 font-medium">Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className="bg-white/5 border-white/20 hover:border-amber-600 text-white hover:bg-white/10 placeholder-slate-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2 font-medium">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="bg-white/5 border-white/20 hover:border-amber-600 text-white hover:bg-white/10 placeholder-slate-400 focus:bg-white/15 transition-all duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium">Subject</label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      className="bg-white/5 border-white/20 hover:border-amber-600 text-white hover:bg-white/10 placeholder-slate-400 focus:bg-white/15 transition-all duration-300"
                      placeholder="Project discussion"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-medium">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="bg-white/5 border-white/20 hover:border-amber-600 hover:bg-white/10 text-white placeholder-slate-400 focus:bg-white/15 transition-all duration-300 h-32 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold py-3 hover:shadow-lg hover:shadow-amber-400/25 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-amber-400 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-2 md:p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-slate-400 hover:text-white transition-colors duration-300"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-slate-400 break-all">{info.details}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className='w-full mt-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-3">Let's create something amazing together</h3>
                <p className="text-slate-400 leading-relaxed hover:text-white transition-colors duration-300">
                  I'm always open to discussing new opportunities, creative projects, or collaborations. Whether you have a specific idea in mind or just want to explore possibilities, feel free to reach out. Let's turn your vision into reality!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}