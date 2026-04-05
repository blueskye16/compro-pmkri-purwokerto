import { type SchemaTypeDefinition } from "sanity";
import { hero } from "./hero";
import { history } from "./history";
import { vision } from "./vision";
import { quotes } from "./quotes";
import { gallery } from "./gallery";
import { galleryCategory } from "./galleryCategory";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, history, vision, quotes, gallery, galleryCategory],
};
