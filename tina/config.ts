import { defineConfig } from "tinacms";

// Your hosting provider will assign a client ID and read-only token
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.cloud
  token: null, // Get this from tina.cloud

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "reference",
            name: "author",
            label: "Author",
            collections: ["author"],
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "author",
        label: "Authors",
        path: "src/content/authors",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "name",
            label: "First Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "surname",
            label: "Surname",
          },
          {
            type: "string",
            name: "role",
            label: "Role",
          },
          {
            type: "string",
            name: "sub_role",
            label: "Sub Role",
          },
          {
            type: "string",
            name: "short_bio",
            label: "Short Bio",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "object",
            list: true,
            name: "battlegrounds",
            label: "Battlegrounds",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
            ]
          },
          {
            type: "string",
            list: true,
            name: "manifesto",
            label: "Manifesto Points",
          },
          {
            type: "object",
            list: true,
            name: "links",
            label: "Links",
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "url", label: "URL" },
              { type: "string", name: "icon", label: "Icon" },
            ]
          },
          {
            type: "object",
            name: "cta",
            label: "CTA",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "button_text", label: "Button Text" },
              { type: "string", name: "email", label: "Email" },
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
