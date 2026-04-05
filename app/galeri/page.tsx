import { client } from "@/sanity/lib/client";
import { SanityGalleryData } from "@/lib/sanity-types";
import GalleryClient from "./GalleryClient"; // Kita akan buat file ini di langkah selanjutnya

// Mengambil data dari Sanity saat proses build/request di Server
async function getGalleryData(): Promise<SanityGalleryData[]> {
  // GROQ Query: Ambil galeri, urutkan dari terbaru, dan "bongkar" reference URL gambar dan nama kategorinya
  const query = `*[_type == "gallery"] | order(_createdAt desc) {
    _id,
    title,
    "mainImageUrl": mainImageUrl.asset->url,
    "category": category->title
  }`;

  return await client.fetch(query);
}

export const revalidate = 60; // ISR: Update data maksimal setiap 60 detik jika ada perubahan di Sanity

export default async function GaleriPage() {
  const galleryData = await getGalleryData();

  return <GalleryClient initialData={galleryData} />;
}
