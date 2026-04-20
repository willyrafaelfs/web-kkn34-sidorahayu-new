import React, { useState } from "react";
import { motion } from "motion/react";
import assets from "../assets";
import Title from "./Title";
import ThreeRenderer from "./ThreeRenderer";

type LuaranProps = {
  theme: "light" | "dark";
  setGlobalModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setHideFooter: React.Dispatch<React.SetStateAction<boolean>>;
};

interface LuaranData {
  title: string;
  category: string;
  desc: string;
  image: string;
  link: string;
  glbLink?: string;
  is3D?: boolean;
  isPopup?: boolean;
}

const luaranData: LuaranData[] = [
  {
    title: "Optimalisasi Budidaya Hidroponik sebagai Upaya Penguatan Program Kerja Rutinan Ibu-Ibu PKK",
    category: "Poster",
    desc: "Poster ini menggambarkan kegiatan pengabdian masyarakat melalui program hidroponik yang bertujuan meningkatkan produktivitas dan kemandirian ekonomi ibu-ibu PKK. Program ini mencakup tahapan penyemaian, sosialisasi konsep dasar hidroponik, pelatihan praktik, hingga perawatan tanaman secara berkelanjutan. Dengan metode yang sederhana dan efisien lahan, hidroponik menjadi solusi inovatif bagi masyarakat desa untuk bercocok tanam secara modern, sehat, dan bernilai ekonomis.",
    image: assets.cover_poster,
    link: "https://www.instagram.com/p/DWNkcvJD7l3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    isPopup: true,
  },
  {
    title: "Optimalisasi Budidaya Hidroponik sebagai Upaya Penguatan Program Kerja Rutinan Ibu-Ibu PKK",
    category: "Artikel",
    desc: "Artikel ini menggambarkan kegiatan pengabdian masyarakat melalui program hidroponik yang bertujuan meningkatkan produktivitas dan kemandirian ekonomi ibu-ibu PKK. Program ini mencakup tahapan penyemaian, sosialisasi konsep dasar hidroponik, pelatihan praktik, hingga perawatan tanaman secara berkelanjutan. Dengan metode yang sederhana dan efisien lahan, hidroponik menjadi solusi inovatif bagi masyarakat desa untuk bercocok tanam secara modern, sehat, dan bernilai ekonomis.",
    image: assets.cover_artikel,
    link: "https://drive.google.com/file/d/1p7JV3wpQYyST5A3rllV-rXU9uCOjCdiZ/preview",
    isPopup: true,
  },
  {
    title:
      "Sistem Hidroponik Upaya Pemanfaatan Lahan dan Ketahanan Pangan",
    category: "Video",
    desc: "After Movie KKN 34 Sidorahayu 2026",
    image: assets.cover_aftermovie,
    link: "https://www.youtube.com/embed/e-isClg0opw?si=kFhNoDrQhGXHr0Cg",
    isPopup: true,
  },
];

const Luaran: React.FC<LuaranProps> = ({
  theme,
  setGlobalModalOpen,
  setHideFooter,
}) => {
  const [selectedItem, setSelectedItem] = useState<LuaranData | null>(null);

  const isCanva = selectedItem?.link?.includes("canva.com");

  const handleOpenPreview = (e: React.MouseEvent, item: LuaranData) => {
    e.preventDefault();
    setSelectedItem(item);
    setGlobalModalOpen(true);
    setHideFooter(true);
  };

  const handleClosePreview = () => {
    setSelectedItem(null);
    setGlobalModalOpen(false);
    setHideFooter(false);
  };

  return (
    <div id="luaran" className="relative z-10 scroll-mt-10 ">
      {/* Background */}
      <img
        src={theme === "dark" ? assets.background : assets.backgroundlight}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-[10px]"
        loading="lazy"
      />
      <motion.div
        className="px-6 max-w-6xl mx-auto py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <Title
          title="Luaran"
          desc="Hasil akhir kelompok  KKN 34 Sidorahayu Universitas Merdeka Malang dalam bentuk karya publikasi."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {luaranData.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) =>
                item.isPopup ? handleOpenPreview(e, item) : undefined
              }
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl p-1 border overflow-hidden backdrop-blur-sm transition-all ${
                item.isPopup ? "cursor-zoom-in" : "cursor-pointer"
              } ${theme === "dark" ? "border-white/10 bg-white/5 shadow-2xl" : "border-black/10 bg-black/5"}`}
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}
                >
                  {item.category}
                </span>
                <h3
                  className={`text-xl font-bold mt-2 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}
                >
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold group-hover:gap-4 transition-all text-primary dark:text-text-invert">
                  <span>{item.isPopup ? "Preview Karya" : "Lihat Detail"}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* POPUP PREVIEW */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-99999 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10"
          onClick={handleClosePreview}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className={`relative w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl ${
              isCanva ? "max-w-xl aspect-[1/1.2]" : "max-w-6xl h-[85vh]"
            } bg-white rounded-3xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* HEADER MODAL */}
            <div className="p-4 bg-neutral-100 flex justify-between items-center border-b">
              <div className="flex items-center gap-3">
                <div
                  className={`px-2 py-1 rounded text-[10px] font-bold text-white ${
                    selectedItem.glbLink
                      ? "bg-orange-500"
                      : isCanva
                        ? "bg-blue-500"
                        : "bg-blue-700"
                  }`}
                >
                  {selectedItem.glbLink
                    ? "3D MODEL"
                    : isCanva
                      ? "CANVA"
                      : "DOCUMENT"}
                </div>
                <span className="font-bold text-neutral-800 text-sm md:text-base truncate max-w-50">
                  {selectedItem.glbLink
                    ? "Preview Desain 3D"
                    : `Preview ${isCanva ? "Poster" : "Luaran"}`}
                </span>
              </div>
              <button
                onClick={handleClosePreview}
                className="p-2 bg-neutral-700 hover:bg-neutral-500 rounded-full transition-colors"
              >
                <img src={assets.close_icon} alt="Close" className="w-6 h-6" />
              </button>
            </div>

            {/* BODY (GLB atau Iframe) */}
            <div className="flex-1 w-full relative overflow-hidden bg-[#eeeeee]">
              {selectedItem.glbLink ? (
                <ThreeRenderer modelPath={selectedItem.glbLink} />
              ) : (
                <iframe
                  src={
                    isCanva
                      ? selectedItem.link
                      : `${selectedItem.link}#toolbar=0`
                  }
                  className="absolute inset-0 w-full h-full border-none"
                  title="Content Preview"
                />
              )}
            </div>

            {/* FOOTER MODAL */}
            <div className="p-4 bg-white border-t flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[10px] md:text-xs text-neutral-400 italic text-center md:text-left">
                {selectedItem.glbLink
                  ? "*Gunakan mouse/sentuhan untuk memutar dan memperbesar objek 3D."
                  : "*Jika dokumen tidak muncul, silakan buka di Google Drive."}
              </p>

              <a
                href={selectedItem.link.replace("/preview", "/view")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto text-center bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-primary/90 transition-all active:scale-95 shadow-md"
              >
                {selectedItem.glbLink
                  ? "Buka di Google Drive"
                  : "Buka Full Screen"}
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Luaran;
