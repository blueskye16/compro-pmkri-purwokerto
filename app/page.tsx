import {
  SanityHeroData,
  SanityHistoryData,
  SanityVisionMissionData,
  SanityQuoteData,
} from "@/lib/sanity-types";
import { client } from "@/sanity/lib/client";
import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { HistorySection } from "@/components/sections/HistorySection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { VisionMissionSection } from "@/components/sections/VisionMissionSection";
import { CTASection } from "@/components/ui/CTASection";
import { Footer } from "@/components/ui/Footer";

// const mockHeroData: SanityHeroData = {
//   _id: "hero-1",
//   title: "PMKRI Cabang Purwokerto",
//   slogan:
//     "Pro Ecclesia et Patria. Membangun Intelektualitas, Merajut Solidaritas.",
//   backgroundImageUrl:
//     "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//   primaryCtaText: "Bergabung Bersama Kami",
//   secondaryCtaText: "Pelajari Sejarah",
// };

// const mockHistoryData: SanityHistoryData = {
//   _id: "hist-1",
//   heading: "Akar Perjuangan di Bumi Panglima Besar",
//   paragraphs: [
//     "Kehadiran PMKRI Cabang Purwokerto tidak terlepas dari dinamika perjuangan mahasiswa Katolik di kancah nasional dan kebutuhan akan wadah pembinaan intelektual di wilayah Banyumas. Berdiri dengan semangat melayani gereja dan tanah air.",
//     "Melalui berbagai fase sejarah, cabang ini telah melahirkan kader-kader pemimpin yang berkontribusi nyata bagi masyarakat, memadukan nilai-nilai kekatolikan dengan semangat kebangsaan yang inklusif.",
//   ],
//   imageUrl:
//     "https://images.unsplash.com/photo-1577414343997-8c3ba0ab3e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
// };

const mockVisionMissionData: SanityVisionMissionData = {
  _id: "vm-1",
  vision:
    "Terwujudnya keadilan sosial, kemanusiaan, dan persaudaraan sejati melalui kaderisasi intelektual populis.",
  missions: [
    {
      title: "Kaderisasi Intelektual",
      description:
        "Membentuk pola pikir kritis dan analitis menghadapi tantangan zaman.",
      iconName: "BookOpen",
    },
    {
      title: "Solidaritas Sosial",
      description:
        "Hadir dan terlibat langsung dalam pergumulan masyarakat terpinggirkan.",
      iconName: "Users",
    },
    {
      title: "Integritas Moral",
      description:
        "Menanamkan nilai-nilai etika kekatolikan dalam setiap sendi kehidupan.",
      iconName: "Target",
    },
    {
      title: "Wawasan Kebangsaan",
      description: "Memperkuat semangat kebhinekaan dan menjaga keutuhan NKRI.",
      iconName: "Eye",
    },
  ],
};

const mockQuotes: SanityQuoteData[] = [
  {
    _id: "q1",
    author: "Antonius Budi",
    role: "Alumni & Tokoh Masyarakat",
    quoteText:
      "PMKRI bukan sekadar organisasi mahasiswa, melainkan laboratorium kepemimpinan yang mengasah ketajaman nurani dan intelektual kita.",
  },
  {
    _id: "q2",
    author: "Maria Goretti",
    role: "Ketua Presidium Demisioner",
    quoteText:
      "Di sini kita belajar bahwa iman tanpa perbuatan adalah mati. Pengabdian kepada masyarakat adalah wujud nyata dari doa kita.",
  },
  {
    _id: "q3",
    author: "Stefanus Y.",
    role: "Akademisi Unsoed",
    quoteText:
      "Kader PMKRI selalu membawa warna tersendiri dalam diskusi akademik—kritis, terukur, dan selalu berpihak pada nilai kemanusiaan.",
  },
];

const HOMEPAGE_QUERY = `{
  "hero": *[_type == "hero"][0]{
    _id,
    title,
    slogan,
    "backgroundImageUrl": backgroundImageUrl.asset->url,
    primaryCtaText,
    secondaryCtaText
  },
  "history": *[_type == "history"][0]{
    _id,
    heading,
    paragraphs,
    "imageUrl": imageUrl.asset->url
  }
}`;

// const HERO_QUERY = `*[_type == "hero"][0]{
//   _id,
//   title,
//   slogan,
//   "backgroundImageUrl": backgroundImageUrl.asset->url,
//   primaryCtaText,
//   secondaryCtaText
//   }`;

// const HISTORY_QUERY = `*[_type == "history"][0] {
//   _id,
//   heading,
//   paragraphs,
//   "imageUrl": imageUrl.asset->url
// }`;

interface HomePageData {
  hero: SanityHeroData | null;
  history: SanityHistoryData | null;
}

export default async function App() {
  const data = await client.fetch<HomePageData>(HOMEPAGE_QUERY);

  if (!data.hero || !data.history) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-900 font-bold">
        Peringatan: Data Homepage tidak lengkap. Harap publikasikan Hero dan
        History di Sanity Studio.
      </div>
    );
  }
  // const heroData = await client.fetch<SanityHeroData>(HERO_QUERY);
  // const historyData = await client.fetch<SanityHistoryData>(HISTORY_QUERY);

  // if (!heroData) {
  //   return (
  //     <div>Peringatan: Data Hero belum dipublikasikan di Sanity Studio.</div>
  //   );
  // }

  // if (!historyData) {
  //   return (
  //     <div>Peringatan: Data History belum dipublikasikan di Sanity Studio.</div>
  //   );
  // }
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        
        :root {
          --font-sans: 'Inter', sans-serif;
          --font-serif: 'Playfair Display', serif;
        }
        
        body { font-family: var(--font-sans); -webkit-font-smoothing: antialiased; }
        h1, h2, h3, h4, h5, h6, .font-serif { font-family: var(--font-serif); }
        html { scroll-behavior: smooth; }
      `,
        }}
      />
      <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden selection:bg-amber-200 selection:text-red-950">
        {/* <Navbar /> */}
        <Navbar />
        <main>
          <HeroSection data={data.hero} />
          <HistorySection data={data.history} />
          <VisionMissionSection data={mockVisionMissionData} />
          <TestimonialSection quotes={mockQuotes} />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
