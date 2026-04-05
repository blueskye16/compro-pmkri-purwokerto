"use client";
import { SanityVisionMissionData } from "@/lib/sanity-types";
import { BookOpen, Users, Target, Eye } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export const VisionMissionSection = ({
  data,
}: {
  data: SanityVisionMissionData;
}) => {
  const icons: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen size={24} />,
    Users: <Users size={24} />,
    Target: <Target size={24} />,
    Eye: <Eye size={24} />,
  };

  return (
    <section
      id="visi-misi"
      className="relative overflow-hidden bg-slate-50 py-24 transition-colors duration-500 dark:bg-slate-950"
    >
      {/* Decorative background elements (Ambient Glow) */}
      <div className="absolute top-0 right-0 h-125 w-125 translate-x-1/3 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl transition-colors duration-500 dark:bg-amber-600/10" />
      <div className="absolute bottom-0 left-0 h-150 w-150 -translate-x-1/4 translate-y-1/3 rounded-full bg-red-900/5 blur-3xl transition-colors duration-500 dark:bg-red-900/20" />
      {/* <div className="dark:to-bg-pattern absolute inset-0 bg-linear-to-b opacity-30 transition-opacity duration-500 dark:from-slate-950 dark:via-slate-950" /> */}

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <FadeIn>
            <div className="mb-4 flex items-center justify-center gap-4">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-sm font-bold tracking-wider text-red-900 uppercase transition-colors duration-500 dark:text-red-400">
                Arah & Tujuan
              </span>
              <div className="h-px w-8 bg-amber-500" />
            </div>
            <h2 className="mb-6 font-serif text-3xl font-bold text-slate-900 transition-colors duration-500 md:text-5xl dark:text-white">
              Visi & Misi
            </h2>
            <p className="text-xl font-medium text-slate-600 italic transition-colors duration-500 dark:text-slate-300">
              "{data.vision}"
            </p>
          </FadeIn>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.missions.map((mission, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="group h-full rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/50 dark:backdrop-blur-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-red-50 text-red-900 transition-colors duration-300 group-hover:bg-red-900 group-hover:text-white dark:bg-red-950/50 dark:text-red-400 dark:group-hover:bg-red-800">
                  {icons[mission.iconName] || <Target size={24} />}
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-slate-900 transition-colors duration-500 dark:text-white">
                  {mission.title}
                </h3>
                <p className="leading-relaxed text-slate-600 transition-colors duration-500 dark:text-slate-400">
                  {mission.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
