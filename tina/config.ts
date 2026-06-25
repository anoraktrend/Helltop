import { defineConfig } from 'tinacms';

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: null,
  token: null,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'public',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'src/content/blog',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
          },
          {
            type: 'reference',
            name: 'author',
            label: 'Author',
            collections: ['authors'],
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
            required: true,
          },
          {
            type: 'string',
            name: 'layout',
            label: 'Layout',
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'homepage',
        label: 'Homepage',
        path: 'src/content/homepage',
        format: 'json',
        fields: [
          {
            type: 'object',
            name: 'hero',
            label: 'Hero Section',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
                required: true,
              },
              {
                type: 'string',
                name: 'subtitle',
                label: 'Subtitle',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
                ui: {
                  component: 'textarea',
                },
              },
            ],
          },
          {
            type: 'object',
            name: 'sections',
            label: 'Sections',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'id',
                label: 'Section ID',
              },
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'string',
                name: 'subtitle',
                label: 'Subtitle',
              },
              {
                type: 'string',
                name: 'type',
                label: 'Type',
                options: [
                  { label: 'Text', value: 'text' },
                  { label: 'Infrastructure', value: 'infrastructure' },
                  { label: 'Software', value: 'software' },
                  { label: 'CTA', value: 'cta' },
                ],
              },
              {
                type: 'string',
                name: 'content',
                label: 'Content',
                ui: {
                  component: 'textarea',
                },
              },
              {
                type: 'object',
                name: 'list',
                label: 'List Items',
                list: true,
                fields: [
                  {
                    type: 'string',
                    name: 'title',
                    label: 'Title',
                  },
                  {
                    type: 'string',
                    name: 'text',
                    label: 'Text',
                  },
                ],
              },
              {
                type: 'string',
                name: 'quote',
                label: 'Quote',
              },
              {
                type: 'object',
                name: 'items',
                label: 'Items',
                list: true,
                fields: [
                  {
                    type: 'string',
                    name: 'name',
                    label: 'Name',
                  },
                  {
                    type: 'string',
                    name: 'url',
                    label: 'URL',
                  },
                  {
                    type: 'string',
                    name: 'icon',
                    label: 'Icon',
                  },
                  {
                    type: 'string',
                    name: 'badge',
                    label: 'Badge',
                  },
                  {
                    type: 'string',
                    name: 'function',
                    label: 'Function',
                  },
                  {
                    type: 'string',
                    name: 'description',
                    label: 'Description',
                  },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'footer',
            label: 'Footer',
            fields: [
              {
                type: 'string',
                name: 'lastUpdated',
                label: 'Last Updated',
              },
              {
                type: 'string',
                name: 'statusUrl',
                label: 'Status URL',
              },
            ],
          },
        ],
      },
      {
        name: 'authors',
        label: 'Authors',
        path: 'src/content/authors',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'name',
            label: 'Name',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'surname',
            label: 'Surname',
          },
          {
            type: 'string',
            name: 'role',
            label: 'Role',
          },
          {
            type: 'string',
            name: 'sub_role',
            label: 'Sub Role',
          },
          {
            type: 'string',
            name: 'short_bio',
            label: 'Short Bio',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'object',
            name: 'battlegrounds',
            label: 'Battlegrounds',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
              },
            ],
          },
          {
            type: 'string',
            name: 'manifesto',
            label: 'Manifesto',
            list: true,
          },
          {
            type: 'object',
            name: 'links',
            label: 'Links',
            list: true,
            fields: [
              {
                type: 'string',
                name: 'name',
                label: 'Name',
              },
              {
                type: 'string',
                name: 'url',
                label: 'URL',
              },
              {
                type: 'string',
                name: 'icon',
                label: 'Icon',
              },
            ],
          },
          {
            type: 'object',
            name: 'cta',
            label: 'CTA',
            fields: [
              {
                type: 'string',
                name: 'title',
                label: 'Title',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
              },
              {
                type: 'string',
                name: 'button_text',
                label: 'Button Text',
              },
              {
                type: 'string',
                name: 'email',
                label: 'Email',
              },
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
    ],
  },
});
