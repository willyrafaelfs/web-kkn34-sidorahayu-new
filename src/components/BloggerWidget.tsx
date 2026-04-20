import assets from "../assets";
import { motion } from "motion/react";

type Article = {
  thumbnail: string;
  title: string;
  link: string;
};

const articles: Article[] = [
  {
    thumbnail: assets.thumb_blog3,
    title:
      "",
    link: "https://kkn34sidorahayuunmer2026.blogspot.com/2026/02/peduli-lingkungan-tim-kkn-universitas.html",
  },
];

const BLOGGER_URL = "https://kkn34sidorahayuunmer2026.blogspot.com/";

const BloggerWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className=" w-full max-w-275 mx-auto bg-[#1a1a1a] text-white rounded-3xl overflow-hidden shadow-2xl font-sans border border-white/10 mt-10"
    >
      {/* HEADER */}
      <div className=" flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-10 bg-[#1a1a1a] gap-6">
        {/* Sisi Kiri: Profil Blog */}
        <a
          href={BLOGGER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group/profile"
        >
          <div className="bg-orange-500 p-3 rounded-xl shadow-lg group-hover/profile:scale-105 transition-transform shrink-0">
            <img
              src={assets.blogger_icon_dark}
              alt="Blogger Icon"
              className="w-8 h-8 object-contain shrink-0"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[18px] tracking-tight leading-tight group-hover/profile:underline">
              Berita Seputar Kegiatan KKN 34 Desa Sidorahayu Unmer Malang 2026
            </h3>
            <p className="text-neutral-400 text-[13px] mt-1">
              Blog ini berisi seputar kegiatan selama KKN kelompok 34 dari
              Universitas Merdeka Malang di desa Sidorahayu tahun 2026
            </p>
          </div>
        </a>

        {/* Sisi Kanan: Button */}
        <a
          href={BLOGGER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#f57d00] hover:bg-[#e65100] text-white transition-colors px-4 py-2 rounded-lg font-bold text-[14px] whitespace-nowrap min-w-fit"
        >
          <img
            src={assets.blogger_icon_dark}
            alt="Blogger"
            className="w-4 h-4"
          />
          Kunjungi Blog
        </a>
      </div>

      {/* BODY / ARTICLE GRID */}
      <div className="px-4 md:px-8 py-6 bg-black/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-16/10 rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
            >
              {/* Thumbnail */}
              <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-neutral-800 ...">
                <img
                  src={article.thumbnail}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={article.title}
                />
              </div>

              {/* Overlay Gradient & Judul */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <p className="text-[13px] text-white font-semibold leading-snug line-clamp-3 group-hover:text-orange-400 transition-colors">
                  {article.title}
                </p>
                <span className="text-[10px] text-neutral-400 uppercase mt-2 tracking-widest font-bold">
                  Baca Artikel →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BloggerWidget;
