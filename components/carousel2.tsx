import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Drive ",
    description: "The landscaped area Renovation a house",
    images: ["/images/d1.jpeg", "/images/d2.jpeg", "/images/d3.jpeg", ], // Multiple images for the carousel
  },
  {
    title: "Garden Rooms",
    description: "Garden rooms and gym room construction",
    images: ["/images/g1.jpg", "/images/g2.jpg", ], // Multiple images for the carousel
  },
];

export default function Carousel2() {
  // States to track the current image in each carousel
  const [currentImageIndex1, setCurrentImageIndex1] = useState(0);
  const [currentImageIndex2, setCurrentImageIndex2] = useState(0);

  // Function to go to the next image
  const nextImage = (projectIndex: number) => {
    if (projectIndex === 0) {
      setCurrentImageIndex1((prev) => (prev + 1) % projects[0].images.length);
    } else {
      setCurrentImageIndex2((prev) => (prev + 1) % projects[1].images.length);
    }
  };

  // Function to go to the previous image
  const prevImage = (projectIndex: number) => {
    if (projectIndex === 0) {
      setCurrentImageIndex1(
        (prev) => (prev - 1 + projects[0].images.length) % projects[0].images.length
      );
    } else {
      setCurrentImageIndex2(
        (prev) => (prev - 1 + projects[1].images.length) % projects[1].images.length
      );
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col h-full"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 text-center flex-shrink-0">
            {project.title}
          </h2>
          <p className="text-center text-lg sm:text-xl text-gray-700 mt-4 flex-shrink-0">
            {project.description}
          </p>

          {/* Image Slider for each project */}
          <div className="relative mt-8 flex-1">
            <div className="overflow-hidden rounded-lg">
              <motion.div
                className="flex transition-transform duration-300"
                style={{
                  transform: `translateX(-${(index === 0 ? currentImageIndex1 : currentImageIndex2) * 100}%)`,
                }}
              >
                {project.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="min-w-full">
                    <Image
                      src={img}
                      alt={`${project.title} image ${imgIndex + 1}`}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
              <button
                onClick={() => prevImage(index)}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
              >
                &#10094;
              </button>
            </div>
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
              <button
                onClick={() => nextImage(index)}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
