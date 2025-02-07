import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/images/back.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center mt-12 text-center text-white bg-black bg-opacity-50 p-4 sm:p-6 md:p-8 lg:p-12 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        Building Excellence, <br /> One Brick at a Time.
        </h1>
        <p className="text-sm sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto">
        Delivering high-quality construction solutions that stand the test of time. We are committed to excellence, customer satisfaction, and creating structures that inspire confidence and trust
        </p>
        <Link href="/booking">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Schedule a Call
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
