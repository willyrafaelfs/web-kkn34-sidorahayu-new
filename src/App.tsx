import { useState, useRef, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProgramKerja from "./components/ProgramKerja";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import Dokumentasi from "./components/Dokumentasi";
import SocialMedia from "./components/SocialMedia";
import Luaran from "./components/Luaran";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    return savedTheme ? savedTheme : "dark";
  });

  const dotRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);

  // Refs untuk melacak posisi custom kursor
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const position = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Memberikan efek halus (lerp) pada pergerakan kursor
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        // Menggerakkan titik tengah kursor
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;

        // Menggerakkan lingkaran luar kursor dengan posisi yang lebih halus
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [hideSocial, setHideSocial] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div className="relative bg-surface dark:bg-primary w-full min-h-screen max-w-full ">
      <Navbar theme={theme} setTheme={setTheme} hide={isModalOpen} />
      <main className="w-full max-w-full overflow-hidden">
        <Hero
          theme={theme}
          setTheme={setTheme}
          setGlobalModalOpen={setIsModalOpen}
        />
        <About />
        <Teams theme={theme} />
        <ProgramKerja setGlobalModalOpen={setIsModalOpen} />
        <Dokumentasi
          theme={theme}
          setGlobalModalOpen={setIsModalOpen}
          setHideSocial={setHideSocial}
        />
        <SocialMedia hideContent={hideSocial} />
        <Luaran
          theme={theme}
          setGlobalModalOpen={setIsModalOpen}
          setHideFooter={setHideFooter}
        />
        {!hideFooter && <Footer theme={theme} />}
      </main>
      <Analytics />
      {/* FIXED CONTAINER KURSOR */}
      <div
        id="custom-cursor-container"
        className="fixed inset-0 pointer-events-none z-999999 overflow-hidden"
      >
        {/* Custom Cursor Ring */}
        <div
          ref={outlineRef}
          className="fixed top-0 left-0 h-10 w-10 rounded-full border border-secondary pointer-events-none z-1000001"
          style={{ transition: "transform 0.1s ease-out" }}
        ></div>

        {/* Custom Cursor Dot */}
        <div
          ref={dotRef}
          className="fixed top-0 left-0 h-3 w-3 rounded-full bg-accent pointer-events-none z-1000001"
        ></div>
      </div>
    </div>
  );
}

export default App;
