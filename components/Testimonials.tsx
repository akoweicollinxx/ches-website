import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "John Powell", feedback: "Excellent craftsmanship and attention to detail!" },
  { name: "Anna Smith", feedback: "We couldn’t be happier with our home renovation!" },
  { name: "Michael Livingstone", feedback: "Reliable and professional service from start to finish!" },
];
 
export default function Testimonials() {
  return (
    <section className="py-16 bg-blue-100 w-full">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900">What Our Clients Say</h2>
        <p className="text-lg text-gray-700 mt-4">
          See what our satisfied clients have to say about our work.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col items-center text-center min-h-[200px]"
            >
              <p className="text-lg italic text-gray-800">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-semibold text-blue-900 mt-4">{testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
