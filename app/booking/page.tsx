"use client";
import React from "react";
import { motion } from "framer-motion";
import { PiCheckCircle } from "react-icons/pi";
import Navbar from "@/components/Navbar";
import Calendly from "./calendly"; // Corrected import
import Footer from "@/components/Footer";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Booking = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />
      <div className="flex flex-col items-center justify-center mx-auto max-w-4xl px-24 py-16 space-y-10">
       
       

        {/* Calendly Widget */}
        <div className="w-full flex justify-center">
          <Calendly />
        </div>

        {/* Social Media Links */}
        <div className="flex py-16 gap-8 text-[#2e3a47]">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-3xl hover:text-blue-600 transition" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl hover:text-blue-400 transition" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-blue-700 transition" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl hover:text-pink-500 transition" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
