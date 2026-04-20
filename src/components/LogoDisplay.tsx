import React from "react";
import { company_logos } from "../assets";
import { motion } from "motion/react";

const LogoDisplay: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-16 overflow-hidden select-none relative"
    >
      {/* Marquee Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="flex w-max animate-marquee"
      >
        {[...company_logos, ...company_logos].map(
          (logo: string, index: number) => (
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              key={index}
              src={logo}
              alt="Company Logo"
              loading="lazy"
              decoding="async"
              onLoad={(e) => (e.currentTarget.style.opacity = "0.6")}
              className="mx-4 sm:mx-8 md:mx-10 lg:mx-14 h-15 sm:h-20 md:h-25 w-auto opacity-0 transition-opacity duration-500 hover:opacity-100 cursor-pointer"
            />
          ),
        )}
      </motion.div>
    </motion.section>
  );
};

export default LogoDisplay;
