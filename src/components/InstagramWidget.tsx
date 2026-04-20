import assets from "../assets";
import { motion } from "framer-motion";

type Post = {
  image: string;
  caption: string;
  link: string;
};

const posts: Post[] = [
  {
    image: assets.post_ig_poster,
    caption:
      "Poster ini menggambarkan kegiatan pengabdian masyarakat melalui program hidroponik yang bertujuan meningkatkan produktivitas dan kemandirian ekonomi ibu-ibu PKK.",
    link: "https://www.instagram.com/p/DWNkcvJD7l3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: assets.post_ig_day32,
    caption:
      "Pertumbuhan sayuran hidroponik yang sudah mulai terlihat setelah beberapa minggu penanaman.",
    link: "https://www.instagram.com/p/DVQkDkuDyaZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    image: assets.post_ig_day29,
    caption:
      "🤗💖",
    link: "https://www.instagram.com/p/DVQh2vsj5j8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];

const InstagramWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className=" w-full max-w-275 mx-auto bg-[#1a1a1a] text-white rounded-3xl overflow-hidden shadow-2xl font-sans"
    >
      <div className="flex flex-col md:flex-row items-center justify-between py-6 px-6 md:px-10 bg-[#1a1a1a] gap-8 md:gap-10">
        {/* Sisi Kiri: Foto Profil & Nama */}
        <a
          href="https://www.instagram.com/kknsidorahayu2026/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group/profile"
        >
          <div className="p-[2.5px] rounded-full bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-transform group-hover/profile:scale-105">
            <div className="bg-[#1a1a1a] rounded-full p-0.5">
              <img
                src={assets.logo_kkn}
                className="w-12.5 h-12.5 rounded-full object-cover"
                alt="Logo"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-[16px] tracking-tight leading-tight group-hover/profile:underline">
              KKN 34
            </h3>
            <h3 className="font-bold text-[16px] tracking-tight leading-tight group-hover/profile:underline">
              Sidorahayu
            </h3>
            <p className="text-neutral-400 text-[13px]">@kkn34.sidorahayu</p>
          </div>
        </a>

        {/* Sisi Kanan: Statistik & Tombol Follow */}
        <div className="flex items-center gap-10">
          <div className="flex gap-4 md:gap-8 text-[13px] md:text-[14px]">
            <div className="text-center">
              <span className="font-bold block">129</span>
              <span className="text-[12px] text-neutral-400 tracking-wider">
                Posts
              </span>
            </div>
            <div className="text-center">
              <span className="font-bold block">57</span>
              <span className="text-[12px] text-neutral-400 tracking-wider">
                Followers
              </span>
            </div>
            <div className="text-center">
              <span className="font-bold block">2</span>
              <span className="text-[11px] text-neutral-400 tracking-wider">
                Following
              </span>
            </div>
          </div>

          <a
            href="https://www.instagram.com/kknsidorahayu2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0095f6] hover:bg-[#1877f2] transition-colors px-4 py-2 rounded-lg font-semibold text-[14px]"
          >
            <img
              src={assets.instagram_icon_footer_dark}
              alt="Instagram"
              className="w-5 h-5"
            />
            Follow
          </a>
        </div>
      </div>

      {/* BODY / FEED */}
      <div className="px-3 md:px-8 py-6 bg-black/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={post.image}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500"
                alt={`Post ${i}`}
              />

              {/* 1. Overlay Background: Fade In */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

              {/* 2. Container Teks dengan overflow-hidden yang lebih ketat */}
              <div className="absolute inset-0 z-10 overflow-hidden flex items-center justify-center">
                <div className="p-6 w-full h-full flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <p className="text-[13px] text-white font-medium leading-relaxed text-center line-clamp-5">
                    {post.caption}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InstagramWidget;
