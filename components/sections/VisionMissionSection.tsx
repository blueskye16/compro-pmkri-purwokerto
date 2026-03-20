"use client"
import { SanityVisionMissionData } from "@/lib/sanity-types";
import { BookOpen, Users, Target, Eye } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

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
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-red-900/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-red-900 font-bold tracking-wider uppercase text-sm">
                Arah & Tujuan
              </span>
              <div className="h-px w-8 bg-amber-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Visi & Misi
            </h2>
            <p className="text-xl text-slate-600 font-medium italic">
              "{data.vision}"
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.missions.map((mission, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group h-full">
                <div className="w-14 h-14 rounded-lg bg-red-50 text-red-900 flex items-center justify-center mb-6 group-hover:bg-red-900 group-hover:text-white transition-colors duration-300">
                  {icons[mission.iconName] || <Target size={24} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                  {mission.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
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
