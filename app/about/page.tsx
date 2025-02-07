"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="flex-grow bg-gray-100 py-16 px-6 flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title with Animation */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl py-16 sm:text-5xl font-bold text-blue-900"
          >
            About Us
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-700 mt-6 mx-auto leading-relaxed"
          >
            Based in <span className="font-semibold text-blue-900">Manchester</span>, Cheshire Construction is a 
            premier construction company specializing in residential, commercial, and renovation projects. 
            With a team of experienced professionals, we ensure every project is built with 
            <span className="font-semibold text-blue-900"> innovation, precision, and excellence.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-700 mt-6 mx-auto leading-relaxed"
          >
            At Cheshire Construction, we take pride in transforming visions into reality, creating structures 
            that are not only functional but also aesthetically outstanding. Our commitment to 
            <span className="font-semibold text-blue-900"> quality, sustainability, and client satisfaction</span> 
            sets us apart in the industry, ensuring that every build stands the test of time.
          </motion.p>

          {/* Fancy Schedule a Call Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:shadow-xl"
              >
                Schedule a Call
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Banner Section - Ensure Image Path is Correct */}
      <section className="relative w-full h-72 md:h-96">
  <Image
    src="/images/banr.jpg"
    alt="Cheshire Construction"
    layout="fill"
    objectFit="cover"
    priority
    className="absolute inset-0 w-full h-full"
  />
</section>

<br />
      <div className="mt-12">
      <Footer />
      </div>
    </div>
  );
}
