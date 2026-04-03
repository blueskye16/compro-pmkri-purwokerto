import { defineType, defineField } from "sanity";

export const quotes = defineType({
  name: "quotes",
  title: "Quotes Section",
  type: "document",
  fields: [
    defineField({ name: "author", title: "Author Name", type: "string" }),
    defineField({ name: "role", title: "Author Role", type: "string" }),
    defineField({ name: "quoteText", title: "Quote Text", type: "string" }),
    defineField({ name: "avatarUrl", title: "Author Profile", type: "image" }),
  ],
});
