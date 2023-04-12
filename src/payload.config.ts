import { buildConfig } from "payload/config";
import path from "path";
import Posts from "./collections/Posts";
import Users from "./collections/Users";

import { Logo } from "./components/Logo";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: "- Natalie Abnormal",
      favicon:
        "https://raw.githubusercontent.com/wvsu-cict-code/cict-logo/0985c71c5d6e1c6caac1f04250c7a02f7efb395b/emblem.svg",
      ogImage:
        "https://raw.githubusercontent.com/wvsu-cict-code/cict-logo/0985c71c5d6e1c6caac1f04250c7a02f7efb395b/emblem-dark.svg",
    },
    components: {
      graphics: {
        Logo,
      },
    },
  },
  collections: [
    Users,
    Posts,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
