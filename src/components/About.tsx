import Title from "./Title";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="about"
      className="relative py-24 px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto space-y-10">
        <Title
          title="Tentang Kami"
          desc="KKN 34 Universitas Merdeka Malang merupakan kelompok mahasiswa yang melaksanakan program pengabdian masyarakat di Desa Sidorahayu, Kecamatan Wagir, Kabupaten Malang. Melalui tema Desain Hidroponik Untuk Optimalisasi Lahan Terbatas, kami berkomitmen menjaga keberlanjutan program kerja melalui kolaborasi, pemberdayaan masyarakat, dan aksi nyata yang berdampak jangka panjang."
        />

        {/* ================= CARD GRID ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 items-stretch"
        >
          {/* ===== VISI CARD ===== */}
          <div className="relative group rounded-3xl p-0.5 h-full">
            {/* BORDER EFFECT */}
            <div
              className="absolute inset-0 rounded-3xl 
                        opacity-0 group-hover:opacity-50 
                        transition duration-500
                        bg-linear-to-r from-primary/50 via-accent/50 to-primary/50"
            />

            {/* INNER CARD */}
            <div
              className="relative h-full rounded-[22px]
                        bg-white/30 dark:bg-accent/10
                        text-primary dark:text-text-invert
                        backdrop-blur-xl shadow-xl
                        p-6 sm:p-8 space-y-6"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide border-b pb-3 text-center">
                Visi
              </h3>

              <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                Terwujudnya 
              </p>
            </div>
          </div>

          {/* ===== MISI CARD ===== */}
          <div className="relative group rounded-3xl p-0.5 h-full">
            {/* BORDER EFFECT */}
            <div
              className="absolute inset-0 rounded-3xl 
                        opacity-0 group-hover:opacity-50 
                        transition duration-500
                        bg-linear-to-r from-primary/50 via-accent/50 to-primary/50"
            />

            {/* INNER CARD */}
            <div
              className="relative h-full rounded-[22px]
                        bg-white/30 dark:bg-accent/10
                        text-primary dark:text-text-invert
                        backdrop-blur-xl shadow-xl
                        py-4 px-6 sm:py-6 sm:px-8 space-y-6"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide border-b pb-3 text-center">
                Misi
              </h3>

              <ul className="space-y-3">
                {[
                  "Melakukan pemberdayaan masyarakat melalui program-program yang berkelanjutan.",
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <span
                      className="flex items-center justify-center 
                                min-w-6 h-6 sm:min-w-7 sm:h-7 
                                rounded-full bg-primary dark:bg-accent 
                                text-white dark:text-primary 
                                text-xs sm:text-sm font-semibold"
                    >
                      {index + 1}
                    </span>
                    <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
