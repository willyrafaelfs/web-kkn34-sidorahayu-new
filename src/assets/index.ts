import logo_kkn from "./logos/logo-kkn34.png";
import background from "./images/bg-dark.png";
import backgroundlight from "./images/bg-light.png";
import menu_icon from "./icons/menu_icon.svg";
import menu_icon_dark from "./icons/menu_icon_dark.svg";
import ArrowIcon from "../assets/icons/arrow";
import CloseIcon from "../assets/icons/close";
import close_icon from "./icons/close_icon.svg";
import sun_icon from "./icons/sun_icon.svg";
import moon_icon from "./icons/moon_icon.svg";
import hero_img from "./images/hero_img.png";
import unmer_logo from "./logos/unmer_logo.png";
import lppm_logo from "./logos/lppm_logo.png";
import logo_lppm from "./logos/logo_lppm.png";
import unmer_exceed from "./logos/unmer_exceed.png";
import unmer_brand from "./logos/unmer_brand.png";
import instagram_icon from "./icons/instagram_icon.png";
import instagram_icon_footer from "./icons/instagram.png";
import instagram_icon_footer_dark from "./icons/instagram_dark.png";
import tiktok_icon from "./icons/tiktok_icon.svg";
import tiktok_icon_dark from "./icons/tiktok_icon_dark.png";
import blogger_icon from "./icons/blogger.png";
import blogger_icon_dark from "./icons/blogger_dark.png";
import github_icon from "./icons/github.png";
import github_icon_dark from "./icons/github_dark.png";
import logo_kkn_simple from "./logos/logo_kkn_simple.png";
import post_ig_day29 from "./images/post_ig_day29.jpg";
import post_ig_day32 from "./images/post_ig_day32.jpg";
import post_ig_poster from "./images/post_ig_poster.jpg";
import thumb_tiktok1 from "./images/thumb_tiktok1.png";
import thumb_tiktok2 from "./images/thumb_tiktok2.png";
import thumb_tiktok3 from "./images/thumb_tiktok3.png";
import thumb_blog3 from "./images/thumb_blog3.png";
import cover_artikel from "./luaran/cover_artikel.png";
import cover_poster from "./luaran/cover_poster.png";
import cover_aftermovie from "./luaran/cover_aftermovie.jpg";

interface ViteImageModule {
  default: string;
}

// Menentukan tipe Record: string (path) -> ViteImageModule (objek modul)
const prokerImages = import.meta.glob<ViteImageModule>(
  "./images/proker/*.{jpeg,png,jpg}",
  {
    eager: true,
  },
);

const getImg = (name: string): string => {
  const path = `./images/proker/${name}`;
  // Mencari path di dalam objek prokerImages
  const imageModule = prokerImages[path];

  // Mengembalikan URL default atau string kosong jika tidak ditemukan
  return imageModule ? imageModule.default : "";
};

export interface ProkerItem {
  title: string;
  description: string;
  image: string;
}

export const proker_data: ProkerItem[] = [
  {
    title: "Survei Lokasi",
    description:
      "Survei awal yang dilakukan oleh tim KKN 34 untuk menentukan lokasi penempatan alat hidroponik",
    image: getImg("survei_lokasi.jpg"),
  },
  {
    title: "Pembelian Perlengkapan",
    description:
      "Pengadaan bahan utama seperti baja ringan, pipa, dan material lainnya dengan memastikan mutu dan ketahanan bahan untuk pembangunan di lapangan.",
    image: getImg("pembelian_perlengkapan.jpg"),
  },
];

const assets = {
  logo_kkn,
  background,
  backgroundlight,
  menu_icon,
  menu_icon_dark,
  ArrowIcon,
  CloseIcon,
  close_icon,
  sun_icon,
  moon_icon,
  blogger_icon,
  blogger_icon_dark,
  hero_img,
  instagram_icon,
  instagram_icon_footer,
  instagram_icon_footer_dark,
  tiktok_icon,
  tiktok_icon_dark,
  github_icon,
  github_icon_dark,
  logo_kkn_simple,
  post_ig_day29,
  post_ig_day32,
  post_ig_poster,
  thumb_tiktok1,
  thumb_tiktok2,
  thumb_tiktok3,
  thumb_blog3,
  cover_artikel,
  cover_poster,
  cover_aftermovie,
};

export const company_logos = [
  logo_kkn,
  lppm_logo,
  unmer_exceed,
  unmer_logo,
  unmer_brand,
  logo_lppm,
];
interface ViteAssetModule {
  default: string;
}
// 1. Ambil semua gambar dari folder carousel
const carouselImages = import.meta.glob<ViteAssetModule>(
  "./images/carousel/*.{jpg,jpeg,png}",
  {
    eager: true,
  },
);

// Helper untuk mengambil URL gambar berdasarkan nama file
const getCarouselImg = (name: string): string => {
  const path = `./images/carousel/${name}`;
  return carouselImages[path]?.default || "";
};

export const carousel_data = [
  {
    image: getCarouselImg("pembukaan_kkn_2026.jpg"),
    title:
      "Foto bersama saat pembukaan KKN di Balai Desa Sidorahayu pada 20 Januari 2026",
  },
  {
    image: getCarouselImg("fotbar_sosialisasi.jpg"),
    title:
      "Foto bersama Ibu-ibu PKK setelah pelaksanaan kegiatan sosialisasi mengenai apa itu hidroponik dan cara menanam sayuran dengan hidroponik",
  },
  {
    image: getCarouselImg("fotbar_lokasi_hidroponik.jpg"),
    title:
      "Foto bersama bapak dan ibu RT dilokasi hidroponik",
  },
];

const fotoFiles = import.meta.glob<ViteAssetModule>(
  "./dokumentasi/foto/*.{jpeg,png,jpg}",
  { eager: true },
);
const videoFiles = import.meta.glob<ViteAssetModule>(
  "./dokumentasi/video/*.{mp4,mov}",
  { eager: true },
);

export type GalleryItem = {
  type: "image" | "video";
  src: string;
  title: string; // Sekarang bersifat wajib karena diambil dari nama file
  id: number;
};

const processFiles = (
  files: Record<string, ViteAssetModule>,
  type: "image" | "video",
): GalleryItem[] => {
  return Object.entries(files).map(([path, module]) => {
    // 1. Ambil nama file lengkap (misal: "DSC_0059.jpg")
    const fullFileName = path.split("/").pop() || "";

    // 2. Ambil nama saja tanpa ekstensi (misal: "DSC_0059")
    const nameOnly = fullFileName.replace(/\.[^/.]+$/, "");

    // 3. Ekstrak angka untuk ID (sorting)
    const numericId = parseInt(fullFileName.replace(/\D/g, "")) || 0;

    return {
      type,
      src: module.default,
      // 4. Gunakan nama file sebagai title (merapikan _ jadi spasi jika ada)
      title: nameOnly.replace(/_/g, " "),
      id: numericId,
    };
  });
};

const allImages = processFiles(fotoFiles, "image");
const allVideos = processFiles(videoFiles, "video");

// Sorting berdasarkan ID
export const dokumentasi_data: GalleryItem[] = [
  ...allImages,
  ...allVideos,
].sort((a, b) => a.id - b.id);

// 1. Ambil semua gambar tim sekaligus
const teamImages = import.meta.glob<ViteAssetModule>(
  "./images/teams/*.{jpg,jpeg,png}",
  {
    eager: true,
  },
);

// Helper untuk mengambil URL gambar berdasarkan nama file
const getTeamImg = (name: string): string => {
  const path = `./images/teams/${name}`;
  return teamImages[path]?.default || "";
};

export interface TeamMember {
  name: string;
  division: string;
  image: string;
  instagram?: string;
}

export const teamData: TeamMember[] = [
  // ================= DPL =================
  {
    name: "Dr. Dra. Nanis Hairunisya, M.M.",
    division: "DPL",
    image: getTeamImg("dpl_nanis.png"),
    instagram: "nanishairunisya",
  },

  // ================= BPH =================
  {
    name: "Yoga Dwi Saputra",
    division: "BPH - Ketua",
    image: getTeamImg("KETUA-YOGA D. SAPUTRA.png"),
    instagram: "babush_ka82",
  },
  {
    name: "Tiffany Eunice Christian Sary",
    division: "BPH - Sekretaris 1",
    image: getTeamImg("SEKERTARIS 1-TIFFANY EUNICE.png"),
    instagram: "tiffanyeuniche",
  },
  {
    name: "Yasmintha Shabillah Arifianda",
    division: "BPH - Sekretaris 2",
    image: getTeamImg("SEKERTARIS 2-YASMINTHA SHABILLAH.png"),
    instagram: "arifiandaaa",
  },
  {
    name: "Yesi Olivia Putri",
    division: "BPH - Bendahara",
    image: getTeamImg("BENDAHARA-YESI OLIVIA.png"),
    instagram: "yesiiolvp",
  },

  // ================= ACARA =================
  {
    name: "Yuan Ardin Try Setyawan",
    division: "Acara (CO)",
    image: getTeamImg("ACARA-YUAN ARDIN.png"),
    instagram: "yuanstwnn",
  },
  {
    name: "Yolenta Yuniati Kodu",
    division: "Acara",
    image: getTeamImg("ACARA-YOLENTA.png"),
    instagram: "yolenta.13",
  },
  {
    name: "Willy Rafael F. Silalahi",
    division: "Acara",
    image: getTeamImg("ACARA-WILLY RAFAEL.png"),
    instagram: "pistarr.7",
  },

  // ================= PDD =================
  {
    name: "Yosefa Karmita Sung",
    division: "PDD",
    image: getTeamImg("PDD-KARMITA.png"),
    instagram: "krm_itaa",
  },
  {
    name: "Yemima Sabina Ersat",
    division: "PDD",
    image: getTeamImg("PDD-YEMIMA.png"),
    instagram: "ysaee__",
  },
  {
    name: "Yazid",
    division: "PDD (CO)",
    image: getTeamImg("PDD-YAZID.png"),
    instagram: "yzdndra_",
  },

  // ================= HUMAS =================
  {
    name: "Yoktaviana Metak",
    division: "Humas (CO)",
    image: getTeamImg("HUMAS-VHIA METAK.png"),
    instagram: "vhiainces",
  },
  {
    name: "Yoga Roziqin Firmansyah",
    division: "Humas",
    image: getTeamImg("HUMAS-YOGA FIRMANSYAH.png"),
    instagram: "yogafirmno",
  },

  // ================= PERKAP =================
  {
    name: "Yohanes Aprilius Jago",
    division: "Perkap (CO)",
    image: getTeamImg("PERKAP-APRIS JAGO.png"),
    instagram: "apris_jago",
  },
  {
    name: "Yohanes Bombang",
    division: "Perkap",
    image: getTeamImg("PERKAP-BOMBANG LECA.png"),
    instagram: "bombangleca",
  },


  // ================= KONSUMSI =================

];

export default assets;
