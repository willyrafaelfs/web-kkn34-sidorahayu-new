import React, {
  useState,
  useRef,
  type SetStateAction,
  type Dispatch,
} from "react";
import { motion } from "motion/react";
import Title from "./Title";
import { dokumentasi_data } from "../assets";
import type { GalleryItem } from "../assets";
import assets from "../assets";

type DokumentasiProps = {
  theme: "light" | "dark";
  setGlobalModalOpen: Dispatch<SetStateAction<boolean>>;
  setHideSocial: Dispatch<SetStateAction<boolean>>;
};

const ITEMS_PER_PAGE = 8;

const Dokumentasi: React.FC<DokumentasiProps> = ({
  theme,
  setGlobalModalOpen,
  setHideSocial,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [preview, setPreview] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");

  // 1. Filter data berdasarkan tipe
  const filteredItems =
    filter === "all"
      ? dokumentasi_data
      : dokumentasi_data.filter((item) => item.type === filter);

  // 2. Urutkan berdasarkan ID (angka dari nama file)
  // Gunakan (a, b) => a.id - b.id untuk urutan 01, 02, dst.
  // Gunakan (a, b) => b.id - a.id jika ingin yang terbaru/angka besar di depan.
  const sortedItems = [...filteredItems].sort((a, b) => a.id - b.id);

  const totalItems = sortedItems.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  // 3. Ambil item dari data yang SUDAH di-sort
  const currentItems = sortedItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  React.useEffect(() => {
    // 1. Ambil data untuk 1 halaman ke depan dan 1 halaman ke belakang
    const prevPageItems =
      currentPage > 1
        ? sortedItems.slice(
            (currentPage - 2) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE,
          )
        : [];

    const nextPageItems = sortedItems.slice(
      currentPage * ITEMS_PER_PAGE,
      (currentPage + 1) * ITEMS_PER_PAGE,
    );

    const itemsToPreload = [...prevPageItems, ...nextPageItems];

    itemsToPreload.forEach((item) => {
      if (item.type === "image") {
        const img = new Image();
        img.src = item.src;
      } else {
        // Preload video secara pasif (hanya metadata agar hemat bandwidth)
        const video = document.createElement("video");
        video.src = item.src;
        video.preload = "metadata";
      }
    });
  }, [currentPage, sortedItems]);

  const handleOpenPreview = (item: GalleryItem) => {
    setPreview(item);
    setGlobalModalOpen(true);
    setHideSocial(true);
  };

  const handleClosePreview = () => {
    setPreview(null);
    setGlobalModalOpen(false);
    setHideSocial(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };
  const getPaginationGroup = () => {
    const range = 2; // Jumlah halaman yang muncul di sekitar halaman aktif
    const segments: (number | string)[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Selalu tampilkan halaman pertama
        i === totalPages || // Selalu tampilkan halaman terakhir
        (i >= currentPage - range && i <= currentPage + range) // Halaman di sekitar aktif
      ) {
        segments.push(i);
      } else if (segments[segments.length - 1] !== "...") {
        segments.push("...");
      }
    }
    return segments;
  };

  return (
    <div id="dokumentasi" className="scroll-mt-10 relative overflow-hidden">
      <img
        src={theme === "dark" ? assets.background : assets.backgroundlight}
        alt="Background"
        className=" absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-[10px]"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" px-6 max-w-6xl mx-auto py-16"
      >
        <Title
          title="Dokumentasi Kegiatan"
          desc="Kumpulan dokumentasi kegiatan KKN 34 Universitas Merdeka Malang di Desa Sidorahayu"
        />
        {/* FILTER BUTTONS */}
        <div className="flex justify-center gap-4 mt-5">
          {(["all", "image", "video"] as const).map((type) => (
            <button
              key={type}
              onClick={() => {
                setFilter(type);
                setCurrentPage(1);
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
        ${
          filter === type
            ? "bg-primary text-white border-primary shadow-lg scale-105"
            : "bg-white/10 dark:bg-white/5 text-primary dark:text-text-invert border-secondary/20 hover:border-primary/50"
        }`}
            >
              {type === "all" ? "Semua" : type === "image" ? "Foto" : "Video"}
            </button>
          ))}
        </div>
        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 min-h-100">
          {currentItems.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: (index % ITEMS_PER_PAGE) * 0.05,
              }}
              viewport={{ once: true }}
              onClick={() => handleOpenPreview(item)}
              className="group relative rounded-2xl overflow-hidden
        bg-accent/80 dark:bg-accent/20
        backdrop-blur-xl shadow-lg
        transition duration-500 
        transform hover:scale-105 cursor-pointer
        h-fit"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  loading="eager"
                  decoding="async"
                  className="aspect-4/3 w-full object-cover"
                />
              ) : (
                <div className="relative">
                  <video
                    src={item.src}
                    preload="auto"
                    className="aspect-4/3 w-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                      ▶
                    </div>
                  </div>
                </div>
              )}

              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300">
                <h1 className="text-base font-medium">
                  {item.title ??
                    (item.type === "video"
                      ? "Video Dokumentasi"
                      : "Dokumentasi KKN")}
                </h1>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className=" flex flex-col sm:flex-row items-center justify-between border-t border-white/10 mt-4 pt-4 gap-4">
          <p className="text-xs md:text-sm text-gray-800 dark:text-gray-400 order-2 sm:order-1">
            Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(startIndex + ITEMS_PER_PAGE, totalItems)}
            </span>{" "}
            of <span className="font-medium">{totalItems}</span>{" "}
            <span className="hidden xs:inline">results</span>
          </p>

          {/* CONTROLS */}
          <div className="flex items-center gap-1 md:gap-2 order-1 sm:order-2">
            {/* Button Prev */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1.5 rounded-md dark:bg-white/10 bg-black/100 disabled:opacity-30 hover:bg-primary/50 transition-colors text-sm font-medium"
            >
              Prev
            </button>

            {/* ANGKA HALAMAN */}
            <div className="flex gap-1 md:gap-2">
              {getPaginationGroup().map((item, i) => (
                <button
                  key={i}
                  disabled={item === "..."}
                  onClick={() =>
                    typeof item === "number" && setCurrentPage(item)
                  }
                  className={`px-3 py-1.5 rounded-md transition-all text-sm font-medium ${
                    currentPage === item
                      ? "dark:bg-accent bg-primary text-white scale-105 shadow-md"
                      : item === "..."
                        ? "cursor-default opacity-50 px-1"
                        : "dark:bg-white/10 bg-black/10 hover:bg-primary/20"
                  } ${
                    typeof item === "number" &&
                    Math.abs(currentPage - Number(item)) <= 1
                      ? "flex"
                      : "hidden sm:flex"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Button Next */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1.5 rounded-md dark:bg-white/10 bg-black/100 disabled:opacity-30 hover:bg-primary/50 transition-colors text-sm font-medium"
            >
              Next
            </button>
          </div>
        </div>

        {/* PREVIEW MODAL */}
        {preview && (
          <div
            onClick={handleClosePreview}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-99999"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full p-4"
            >
              {/* TOMBOL CLOSE */}
              <button
                onClick={handleClosePreview}
                className="absolute -top-4 -right-4 z-100000 bg-primary hover:bg-red-500 text-white p-2 rounded-full shadow-xl transition-all duration-300 group"
              >
                <img
                  src={assets.close_icon}
                  alt="Close"
                  className="w-5 h-5 invert group-hover:rotate-90 transition-transform duration-300"
                />
              </button>

              {/* KONTEN PREVIEW */}
              <div className="flex justify-center w-full">
                {preview.type === "image" ? (
                  <img
                    src={preview.src}
                    className="rounded-xl shadow-2xl border border-white/20 max-h-[85vh] w-auto object-contain"
                    alt="Preview"
                  />
                ) : (
                  <video
                    ref={videoRef}
                    src={preview.src}
                    controls
                    autoPlay
                    className="rounded-xl shadow-2xl border border-white/20 max-h-[85vh] w-auto mx-auto object-contain"
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Dokumentasi;
