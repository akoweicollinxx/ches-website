"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Carousel2 from "@/components/carousel2";



export default function Showcase() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col w-full overflow-hidden">
          <Navbar />
          <section className="py-16 text-center w-full">
        <h2 className="text-4xl py-16 sm:text-5xl font-bold text-blue-900">Showcase</h2>
        <div className="mt-10 max-w-6xl mx-auto px-4">
          <Carousel />

          <br />
          <Carousel2 />
        </div>
      </section>
      <Footer />
        </div>
    );
}
