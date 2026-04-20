import React from "react";
import assets from "../assets";
import { motion } from "motion/react";

type FooterProps = {
  theme: "light" | "dark";
};

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative z-10 border-t border-primary/20 dark:border-surface/20 dark:bg-primary/80 bg-white/50 py-16 text-center px-6 sm:px-12 lg:px-24 xl:px-40"
    >
      {/* Logo + Text */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mb-6"
      >
        <div className="flex items-center gap-4">
          <img
            src={assets.logo_kkn_simple}
            alt="Logo KKN 34"
            className="w-auto h-16"
          />

          <div className="text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-text-invert leading-tight">
              KKN 34 Sidorahayu
            </h3>
            <p className="text-sm opacity-70 text-primary dark:text-text-invert">
              Universitas Merdeka Malang
            </p>
          </div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-sm sm:text-base text-primary dark:text-text-invert opacity-80 mb-6"
      >
        Copyright © 2026 KKN 34 Sidorahayu Universitas Merdeka Malang. All
        rights reserved.
      </motion.p>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-6"
      >
        <a
          href="https://www.instagram.com/kknsidorahayu2026/" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          <img
            src={
              theme === "dark"
                ? assets.instagram_icon_footer_dark
                : assets.instagram_icon_footer
            }
            alt="Instagram"
            className="w-5 h-5"
          />
        </a>

        <a
          href="https://www.tiktok.com/@kkn_sidorahayu34?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          <img
            src={
              theme === "dark" ? assets.tiktok_icon_dark : assets.tiktok_icon
            }
            alt="TikTok"
            className="w-5 h-5"
          />
        </a>

        <a
          href="https://kkn34sidorahayuunmer2026.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          <img
            src={
              theme === "dark" ? assets.blogger_icon_dark : assets.blogger_icon
            }
            alt="Blogspot"
            className="w-5 h-5"
          />
        </a>
        <a
          href="https://github.com/willyrafaelfs/web-kkn34-sidorahayu-new"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          <img
            src={
              theme === "dark" ? assets.github_icon_dark : assets.github_icon
            }
            alt="GitHub"
            className="w-5 h-5"
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
