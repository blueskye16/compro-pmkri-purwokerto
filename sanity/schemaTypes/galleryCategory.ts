import { defineField, defineType } from "sanity";

export const galleryCategory = defineType({
  name: "galleryCategory",
  title: "Kategori Galeri",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nama Kategori",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});