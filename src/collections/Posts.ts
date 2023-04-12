import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
    },
    {
      name: "shortDescription",
      type: "text",
      required: true,
    },
  ],
  admin: {
    description: "Blog posts you post in your blog",
    defaultColumns: ["slug", "shortDescription"],
    useAsTitle: "slug",
    preview: (doc, { locale }) => {
      if (doc?.slug) {
        return `https://bigbird.com/preview/posts/${doc.slug}?locale=${locale}`;
      }

      return null;
    },
    listSearchableFields: ["shortDescription"],
  },
};

export default Posts;
