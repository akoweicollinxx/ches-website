"use client";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg mx-auto px-6 sm:px-8 lg:px-16 xl:px-24  py-16 text-center">
      <h2 className="text-2xl font-semibold text-[#2e3a47] mb-4">
        Schedule Your Consultation
      </h2>
      <p className="text-lg text-gray-600  mb-6">
        Ready to start your next construction project? Book a meeting with one of our experts today to discuss your plans.
      </p>

      <div className="bg-[#f9f9f9] p-4 rounded-lg">
        <InlineWidget
          styles={{ height: "550px" }}
          url="https://calendly.com/cealadigital/30min"
        />
      </div>
    </div>
  );
};

export default Calendly;
