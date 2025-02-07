"use client";
import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection"
import Carousel from "@/components/Carousel";
import Testimonials from "@/components/Testimonials";

// const Carousel = dynamic(() => import("../components/Carousel"), { ssr: false });
// const Testimonials = dynamic(() => import("../components/Testimonials"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full overflow-hidden">
      <Navbar />
      
      {/* Hero Section with Video */}
      <HeroSection/>
      
      {/* Services Section */}
      <ServicesSection/>
      
      {/* Projects Carousel */}
      <section className="py-16 text-center w-full">
        <h2 className="text-4xl font-bold text-blue-900">Our Work</h2>
        <div className="mt-10 max-w-6xl mx-auto px-4">
          <Carousel />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      <Footer />
    </div>
  );
}
