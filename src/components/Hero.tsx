import React, { type Dispatch, type SetStateAction, useRef } from "react";
import assets from "../assets";
import HeroCarousel from "./HeroCarousel";
import LogoDisplay from "./LogoDisplay";
import { motion } from "motion/react";

type HeroProps = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
  setGlobalModalOpen: Dispatch<SetStateAction<boolean>>;
};

const Hero: React.FC<HeroProps> = ({ theme, setGlobalModalOpen }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
    setGlobalModalOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setGlobalModalOpen(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      id="#"
      className="relative isolate min-h-screen overflow-hidden text-primary dark:text-text-invert"
    >
      {/* BACKGROUND*/}
      <img
        src={theme === "dark" ? assets.background : assets.backgroundlight}
        alt="Background"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-[10px]"
      />

      {/* HERO CONTAINER */}
      <section className="flex flex-col items-center gap-4 py-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="rainbow relative z-0 bg-white/15 overflow-hidden p-px inline-flex items-center justify-center rounded-full transition duration-300"
        >
          <div className="flex items-center gap-3 px-4 py-2 text-xs font-medium rounded-full bg-surface/80 dark:bg-primary/80 backdrop-blur">
            <div className="relative flex size-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75 animate-ping"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#A6FF5D]"></span>
            </div>
            Desa Sidorahayu, Kec. Wagir, Kab. Malang – KKN 2026
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-semibold xl:leading-20.5 max-w-4xl"
        >
          KKN 34{" "}
          <span className="inline-flex">
            <span className="text-[#0067A5] dark:text-[#FFED00]">U</span>
            <span className="text-[#F7941D]">N</span>
            <span className="text-[#0067A5] dark:text-[#FFED00]">MER</span>
          </span>{" "}
          Sidorahayu
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg text-primary/90 dark:text-white max-w-xl"
        >
          Program Pemberdayaan Masyarakat Melalui Desain Hidroponik DFT (Deep Flow Technique) Bertingkat Dengan Sistem Resirkulasi Air Untuk Optimalisasi Lahan Terbatas, sebagai wujud pengabdian mahasiswa Universitas Merdeka Malang kepada masyarakat Desa Sidorahayu melalui kolaborasi, aksi nyata, dan pemberdayaan berkelanjutan.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold sm:text-sm text-primary/90 dark:text-white"
        >
          19 Januari – 19 Februari 2026
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <a
            href="#program-kerja"
            className="border-2 border-primary dark:border-surface px-8 h-12 rounded-md flex items-center justify-center hover:bg-accent/30 transition"
          >
            Lihat Program Kerja
          </a>
          <button
            onClick={openModal}
            className="bg-primary dark:bg-surface text-text-invert dark:text-text-primary px-8 h-12 rounded-md hover:bg-accent/70 dark:hover:bg-accent/30 hover:text-primary dark:hover:text-text-invert transition flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M8 5v14l11-7-11-7z" />
            </svg>
            Tonton After Movie
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          viewport={{ once: true }}
          className="relative mt-6 w-full max-w-6xl"
        >
          <HeroCarousel />
        </motion.div>
        <div className="relative">
          <LogoDisplay />
        </div>
      </section>
      {open && (
        <div
          className="fixed inset-0 z-9998 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-surface dark:bg-primary rounded-xl shadow-2xl p-6 z-9999"
          >
            {/* Close Button */}
            <button onClick={closeModal} className="absolute top-4 right-4">
              <img src={assets.close_icon} alt="Close" className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-semibold mb-4 text-primary dark:text-text-invert">
              After Movie KKN 34 Sidorahayu 2026
            </h3>

            {/* IFRAME PLAYER */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/e-isClg0opw?si=kFhNoDrQhGXHr0Cg"
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Hero;
