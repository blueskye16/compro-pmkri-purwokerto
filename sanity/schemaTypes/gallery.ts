import { defineField, defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul Foto/Kegiatan",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImageUrl",
      title: "Foto Utama",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    // UBAH BAGIAN INI MENJADI REFERENCE
    defineField({
      name: "category",
      title: "Kategori",
      type: "reference",
      to: [{ type: "galleryCategory" }], // Menunjuk ke dokumen kategori yang baru kita buat
      validation: (Rule) => Rule.required(),
    }),
  ],
});