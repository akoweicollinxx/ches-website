import { motion } from "framer-motion";

const services = [
  {
    title: "Residential Construction",
    description: "We specialize in building custom homes, ensuring every detail is crafted with precision and quality.",
  },
  {
    title: "Commercial Projects",
    description: "From office buildings to retail spaces, we deliver high-quality commercial construction services.",
  },
  {
    title: "Renovations",
    description: "Upgrade and transform your existing space with our expert renovation and remodeling services.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100 w-full text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">Our Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="relative p-8 bg-white shadow-lg rounded-[20px] border border-gray-300 flex flex-col items-center text-center min-h-[250px] overflow-hidden"
            >
              {/* Unique Card Shape */}
              <div className="absolute -top-10 left-0 right-0 mx-auto w-24 h-24 bg-blue-900 rounded-full opacity-10"></div>

              <h3 className="text-xl sm:text-2xl font-semibold text-blue-900 z-10">{service.title}</h3>
              <p className="text-gray-700 mt-4 text-sm sm:text-base z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
