import { defineType, defineField } from "sanity";

export const vision = defineType({
  name: "vision",
  title: "Vision Section",
  type: "document",
  fields: [
    defineField({ name: "vision", title: "Vision", type: "string" }),
    defineField({
      name: "missions",
      title: "Missions",
      type: "array",
      of: [{ type: "block" }],
      // pelajarin disini buat nyamain sama sanity-types
    }),
  ],
});
