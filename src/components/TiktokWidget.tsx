import assets from "../assets";
import { motion } from "framer-motion";

type Video = {
  thumbnail: string;
  link: string;
};

const videos: Video[] = [
  {
    thumbnail: assets.thumb_tiktok1,
    link: "https://www.tiktok.com/@kkn_sidorahayu34/video/7598440194152402194?is_from_webapp=1&sender_device=pc&web_id=7601495713160496658",
  },
  {
    thumbnail: assets.thumb_tiktok2,
    link: "https://www.tiktok.com/@kkn_sidorahayu34/video/7605227198127082772?is_from_webapp=1&sender_device=pc&web_id=7601495713160496658",
  },
  {
    thumbnail: assets.thumb_tiktok3,
    link: "https://www.tiktok.com/@kkn_sidorahayu34/video/7600012690995580181?is_from_webapp=1&sender_device=pc&web_id=7601495713160496658",
  },
];

const TIKTOK_URL = "https://www.tiktok.com/@kkn_sidorahayu34?lang=id-ID";

const TiktokWidget = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative z-0 w-full max-w-275 mx-auto bg-[#1a1a1a] text-white rounded-3xl overflow-hidden shadow-2xl font-sans border border-white/10"
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-8 bg-[#1a1a1a] gap-6">
        {/* Sisi Kiri: Profil */}
        <a
          href={TIKTOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group/profile"
        >
          <img
            src={assets.logo_kkn}
            className="w-14 h-14 rounded-full object-cover border border-white/20"
            alt="Logo"
          />
          <div className="flex flex-col">
            <h3 className="font-bold text-[18px] tracking-tight leading-tight group-hover/profile:underline">
              KKN 34 Sidorahayu
            </h3>
            <div className="flex gap-3 md:gap-8 text-[13px] md:text-[14px] mt-1">
              <p>
                <span className="font-bold">16.4k</span>{" "}
                <span className="text-neutral-400">Likes</span>
              </p>
              <p>
                <span className="font-bold">278</span>{" "}
                <span className="text-neutral-400">Followers</span>
              </p>
              <p>
                <span className="font-bold">1</span>{" "}
                <span className="text-neutral-400">Following</span>
              </p>
            </div>
            <p className="text-neutral-300 text-[13px] mt-1">
              🏠 Universitas Merdeka Malang 📍 Ds. Sidorahayu, Kec Wagir,
              Kab. Malang
            </p>
          </div>
        </a>

        {/* Sisi Kanan: Button */}
        <a
          href={TIKTOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-black hover:bg-neutral-200 transition-colors px-5 py-1.5 rounded-md font-bold text-[14px]"
        >
          <img src={assets.tiktok_icon} alt="TikTok" className="w-4 h-4" />
          Follow
        </a>
      </div>

      {/* BODY / VIDEO GRID */}
      <div className="px-3 md:px-8 py-6 bg-black/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {videos.map((video, i) => (
            <a
              key={i}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-3/4 rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Thumbnail */}

              <img
                src={video.thumbnail}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                alt={`TikTok ${i}`}
              />

              {/* Overlay: Redup saat hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Ikon TikTok di Tengah */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={assets.tiktok_icon}
                  className="w-18 h-18 drop-shadow-lg opacity-90 group-hover:opacity-100 transition-opacity"
                  alt="Play"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TiktokWidget;
