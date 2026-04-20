import React from "react";
import Title from "./Title";
import InstagramWidget from "./InstagramWidget";
import TiktokWidget from "./TiktokWidget";
import { motion } from "motion/react";
import BloggerWidget from "./BloggerWidget";

type SocialMediaProps = {
  hideContent?: boolean;
};

const SocialMedia: React.FC<SocialMediaProps> = ({ hideContent }) => {
  return (
    <motion.div
      id="sosial-media"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
      className="px-6 max-w-6xl mx-auto py-20 scroll-mt-5"
    >
      <Title
        title="Sosial Media"
        desc="Ikuti kegiatan terbaru KKN 34 Sidorahayu melalui Instagram, TikTok, dan Blogger kami."
      />
      {!hideContent && (
        <div className="mt-6 space-y-10 relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6 text-primary dark:text-text-invert"
          >
            Instagram
          </motion.h3>
          <InstagramWidget />
          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6 text-primary dark:text-text-invert"
          >
            Tiktok
          </motion.h3>
          <TiktokWidget />
          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6 text-primary dark:text-text-invert"
          >
            Blogger
          </motion.h3>
          <BloggerWidget />
        </div>
      )}
    </motion.div>
  );
};

export default SocialMedia;
