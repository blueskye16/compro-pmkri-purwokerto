import { type SchemaTypeDefinition } from "sanity";
import { hero } from "./hero";
// import { hero } from "@/sanity/schemaTypes/hero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero],
};
