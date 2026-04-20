import { motion } from "motion/react";
interface TitleProps {
  title: string;
  desc: string;
}

const Title = ({ title, desc }: TitleProps) => {
  return (
    <div className="text-center space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-primary dark:text-text-invert text-3xl sm:text-4xl md:text-5xl font-semibold"
      >
        {title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-primary dark:text-text-invert text-sm sm:text-base md:text-lg max-w-6xl mx-auto leading-relaxed"
      >
        {desc}
      </motion.p>
    </div>
  );
};

export default Title;
