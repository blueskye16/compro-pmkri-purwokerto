import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://pmkri-purwokerto.vercel.app"),

  title: {
    default: "PMKRI Cabang Purwokerto",
    template: "%s PMKRI Cab. Purwokerto",
  },
  description: "Pro Ecclesia Et Patria!",
  keywords: [
    "PMKRI",
    "Perhimpunan Mahasiswa Katolik Republik Indonesia",
    "PMKRI Cabang Purwokerto",
    "Cipayung",
    "Organisasi Mahasiswa Purwokerto",
  ],
  authors: [{ name: "blueskye" }],
  creator: "blueskye",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://pmkri-purwokerto.vercel.app",
    title: "PMKRI Cabang Purwokerto",
    description: "Pro Ecclesia Et Patria!",
    siteName: "PMKRI Cabang Purwokerto",
    images: [
      {
        url: "https://pmkri-purwokerto.vercel.app/cover-web-pmkri-pwt.png",
        secureUrl: "https://pmkri-purwokerto.vercel.app/cover-web-pmkri-pwt.png",
        width: 1200,
        height: 630,
        alt: "Preview Web PMKRI Purwokerto",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PMKRI Cabang Purwokerto",
    description: "Pro Ecclesia Et Patria!",
    images: ["https://pmkri-purwokerto.vercel.app/cover-web-pmkri-pwt.png"],
  },

  // Memastikan robot mesin pencari mengindeks web Anda
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50"
      >
        {/* <body suppressHydrationWarning className="flex min-h-full flex-col"> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
