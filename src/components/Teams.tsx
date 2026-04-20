import React from "react";
import Title from "./Title";
import assets, { teamData } from "../assets";
import { motion } from "motion/react";

type TeamsProps = {
  theme: "light" | "dark";
};

const Teams: React.FC<TeamsProps> = ({ theme }) => {
  return (
    <div className="relative isolate overflow-hidden">
      <img
        src={theme === "dark" ? assets.background : assets.backgroundlight}
        alt="Background"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-[10px]"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        id="team"
        className="flex flex-col items-center gap-10 px-6 sm:px-12 lg:px-24 py-24 text-primary dark:text-text-invert"
      >
        <Title
          title="Struktur Tim KKN 34 Sidorahayu"
          desc="Tim KKN 34 Sidorahayu Universitas Merdeka Malang yang berkolaborasi dalam berbagai divisi untuk menjalankan program pengabdian di Desa Sidorahayu."
        />

        {/* ===== LEADER ===== */}
        <div className="w-full flex justify-center">
          {teamData.slice(0, 1).map((team, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              key={index}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl
                        bg-surface dark:bg-primary
                        hover:bg-primary dark:hover:bg-surface
                        border border-secondary/40 dark:border-secondary/40
                        shadow-xl
                        transition-all duration-300
                        hover:scale-[1.03] hover:shadow-2xl
                        max-w-sm w-full"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-secondary/20 flex items-center justify-center bg-neutral-900 dark:bg-neutral-100 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-900">
                <img
                  src={team.image}
                  alt={team.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover scale-[3] object-[center_10%]"
                />
              </div>

              <div className="text-center">
                <h3
                  className="font-bold text-base text-text-primary dark:text-text-invert
               group-hover:text-text-invert dark:group-hover:text-text-primary"
                >
                  {team.name}
                </h3>
                <p
                  className="text-sm font-medium opacity-80 mt-1
              text-text-primary dark:text-text-invert
              group-hover:text-text-invert dark:group-hover:text-text-primary"
                >
                  {team.division}
                </p>
                <a
                  href={`https://instagram.com/${team.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-3
                            text-text-primary dark:text-text-invert
                            group-hover:text-text-invert dark:group-hover:text-text-primary
                            opacity-80 hover:opacity-100
                            text-xs font-light transition"
                >
                  <img
                    src={assets.instagram_icon}
                    alt="Instagram"
                    className="w-4 h-4"
                  />
                  @{team.instagram}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== GRID MEMBERS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-6xl">
          {teamData.slice(1).map((team, index) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: (index % 4) * 0.1,
              }}
              viewport={{ once: true, margin: "-50px" }}
              key={index}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl
                        bg-surface dark:bg-primary
                        hover:bg-primary dark:hover:bg-surface
                        border border-secondary/40 dark:border-secondary/40
                        shadow-lg
                        transition-all duration-300
                        hover:scale-[1.03] hover:shadow-2xl"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-secondary/20 flex items-center justify-center bg-neutral-900 dark:bg-neutral-100 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-900">
                <img
                  src={team.image}
                  alt={team.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover scale-[2] object-[center_15%]"
                />
              </div>
              {/* Content anggota lainnya */}
              <div className="text-center">
                <h3
                  className="font-bold text-sm text-text-primary dark:text-text-invert
               group-hover:text-text-invert dark:group-hover:text-text-primary"
                >
                  {team.name}
                </h3>
                <p
                  className="text-xs font-medium opacity-80 mt-1
              text-text-primary dark:text-text-invert
              group-hover:text-text-invert dark:group-hover:text-text-primary"
                >
                  {team.division}
                </p>
                <a
                  href={`https://instagram.com/${team.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-3
                            text-text-primary dark:text-text-invert
                            group-hover:text-text-invert dark:group-hover:text-text-primary
                            opacity-80 hover:opacity-100
                            text-xs font-light transition"
                >
                  <img
                    src={assets.instagram_icon}
                    alt="Instagram"
                    className="w-4 h-4"
                  />
                  @{team.instagram}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Teams;
