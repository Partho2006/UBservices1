"use client";
import React from "react";
import { Users, Package, Palette, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion"; // ✅ Add this import

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: Users,
      title: "Restaurant & Hotel Consulting",
      description:
        "Strategic guidance to optimize operations, enhance guest experiences, and maximize profitability.",
      features: [
        "Operational efficiency audits",
        "Menu engineering & pricing",
        "Staff training programs",
        "Revenue optimization",
        "Brand positioning strategies",
      ],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070",
    },
    {
      icon: Package,
      title: "Premium Kitchen Products",
      description:
        "Professional-grade utensils, equipment, and supplies that meet the highest industry standards.",
      features: [
        "Commercial kitchen equipment",
        "Professional utensils & tools",
        "Quality tableware & serveware",
        "Custom product sourcing",
        "Installation & maintenance",
      ],
      image:
        "https://www.citiindustries.com.au/wp-content/uploads/2018/09/kitchen-flooring.jpg",
    },
    {
      icon: Palette,
      title: "Interior & Exterior Design",
      description:
        "Creating memorable spaces that reflect your brand and provide exceptional guest experiences.",
      features: [
        "Complete space design",
        "Brand-aligned aesthetics",
        "Functional layout optimization",
        "Lighting & ambiance design",
        "Project management",
      ],
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074",
    },
    {
      icon: Users,
      title: "Skilled Hospitality Staffing",
      description:
        "Supplying highly trained and experienced staff to elevate service standards in restaurants and hotels across India and abroad.",
      features: [
        "Experienced chefs & culinary experts",
        "Professional waitstaff & bartenders",
        "Housekeeping & support staff",
        "Front desk & concierge services",
        "Flexible staffing for local & international needs",
      ],
      image:
        "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2074",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 hover:text-amber-500 transition-colors duration-300">
            Our <span className="text-amber-600">Expertise</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to elevate your hospitality business
            from concept to completion
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-5 h-5 text-amber-600 mr-3 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  onClick={scrollToContact}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Image */}
              <motion.div
                className={index % 2 === 1 ? "lg:order-1" : ""}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden shadow-2xl">
                  <CardContent className="p-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
