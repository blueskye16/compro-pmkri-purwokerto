import { defineType, defineField } from "sanity";

export const history = defineType({
  name: "history",
  title: "History Section",
  type: "document",
  fields: [
    defineField({ name: "heading", title: "Heading", type: "string" }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "imageUrl", title: "Image", type: "image" }),
  ],
});
