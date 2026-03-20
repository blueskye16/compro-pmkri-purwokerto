import {
  SanityHeroData,
  SanityHistoryData,
  SanityVisionMissionData,
  SanityQuoteData,
} from "@/lib/sanity-types";

const mockHeroData: SanityHeroData = {
  _id: "hero-1",
  title: "PMKRI Cabang Purwokerto",
  slogan:
    "Pro Ecclesia et Patria. Membangun Intelektualitas, Merajut Solidaritas.",
  backgroundImageUrl:
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  primaryCtaText: "Bergabung Bersama Kami",
  secondaryCtaText: "Pelajari Sejarah",
};

const mockHistoryData: SanityHistoryData = {
  _id: "hist-1",
  heading: "Akar Perjuangan di Bumi Panglima Besar",
  paragraphs: [
    "Kehadiran PMKRI Cabang Purwokerto tidak terlepas dari dinamika perjuangan mahasiswa Katolik di kancah nasional dan kebutuhan akan wadah pembinaan intelektual di wilayah Banyumas. Berdiri dengan semangat melayani gereja dan tanah air.",
    "Melalui berbagai fase sejarah, cabang ini telah melahirkan kader-kader pemimpin yang berkontribusi nyata bagi masyarakat, memadukan nilai-nilai kekatolikan dengan semangat kebangsaan yang inklusif.",
  ],
  imageUrl:
    "https://images.unsplash.com/photo-1577414343997-8c3ba0ab3e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
};

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
