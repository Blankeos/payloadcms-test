import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "Writer", value: "writer" },
      ],
      required: true,
      defaultValue: "writer",
    },
    // Email added by default
    // Add more fields as needed
  ],
};

export default Users;
