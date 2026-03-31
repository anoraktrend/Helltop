import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'src/content/homepage/1.index',
      format: { data: 'json' },
      schema: {
        hero: fields.object({
          title: fields.text({ label: 'Hero Title' }),
          subtitle: fields.text({ label: 'Hero Subtitle' }),
          description: fields.text({ label: 'Hero Description', multiline: true }),
        }),
        sections: fields.array(
          fields.conditional(fields.select({
            label: 'Section Type',
            options: [
              { label: 'Text/Manifesto', value: 'text' },
              { label: 'Infrastructure', value: 'infrastructure' },
              { label: 'Software', value: 'software' },
              { label: 'Call to Action', value: 'cta' },
            ],
            defaultValue: 'text',
          }), {
            text: fields.object({
              id: fields.text({ label: 'ID' }),
              title: fields.text({ label: 'Title' }),
              type: fields.text({ label: 'Type (Fixed)', defaultValue: 'text', readOnly: true }),
              content: fields.text({ label: 'Content', multiline: true }),
              list: fields.array(fields.object({
                title: fields.text({ label: 'Item Title' }),
                text: fields.text({ label: 'Item Text', multiline: true }),
              }), { label: 'List Items' }),
              quote: fields.text({ label: 'Quote', multiline: true }),
            }),
            infrastructure: fields.object({
              id: fields.text({ label: 'ID' }),
              title: fields.text({ label: 'Title' }),
              subtitle: fields.text({ label: 'Subtitle' }),
              type: fields.text({ label: 'Type (Fixed)', defaultValue: 'infrastructure', readOnly: true }),
              items: fields.array(fields.object({
                name: fields.text({ label: 'Name' }),
                url: fields.text({ label: 'URL' }),
                icon: fields.text({ label: 'Icon (e.g., simple-icons:nextcloud)' }),
                badge: fields.text({ label: 'Badge Text' }),
                function: fields.text({ label: 'Function Description', multiline: true }),
              }), { label: 'Infrastructure Items' }),
            }),
            software: fields.object({
              id: fields.text({ label: 'ID' }),
              title: fields.text({ label: 'Title' }),
              subtitle: fields.text({ label: 'Subtitle' }),
              type: fields.text({ label: 'Type (Fixed)', defaultValue: 'software', readOnly: true }),
              items: fields.array(fields.object({
                name: fields.text({ label: 'Name' }),
                url: fields.text({ label: 'URL' }),
                description: fields.text({ label: 'Description', multiline: true }),
              }), { label: 'Software Items' }),
            }),
            cta: fields.object({
              id: fields.text({ label: 'ID' }),
              title: fields.text({ label: 'Title' }),
              type: fields.text({ label: 'Type (Fixed)', defaultValue: 'cta', readOnly: true }),
              content: fields.text({ label: 'Content (HTML/Text)', multiline: true }),
            }),
          }),
          { label: 'Homepage Sections' }
        ),
        footer: fields.object({
          lastUpdated: fields.text({ label: 'Last Updated Text' }),
          statusUrl: fields.text({ label: 'Status URL' }),
        }),
      },
    }),
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        date: fields.date({ label: 'Published Date' }),
        author: fields.text({ label: 'Author ID (e.g., me)', defaultValue: 'me' }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/uploads',
              publicPath: '/uploads',
            },
          },
        }),
      },
    }),
    authors: collection({
      label: 'Authors',
      slugField: 'name',
      path: 'src/content/authors/*',
      format: { contentField: 'content' },
      schema: {
        name: fields.slug({ name: { label: 'First Name' } }),
        surname: fields.text({ label: 'Surname' }),
        role: fields.text({ label: 'Role' }),
        sub_role: fields.text({ label: 'Sub Role' }),
        short_bio: fields.text({ label: 'Short Bio', multiline: true }),
        battlegrounds: fields.array(fields.object({
          title: fields.text({ label: 'Title' }),
          description: fields.text({ label: 'Description', multiline: true }),
        }), { label: 'Battlegrounds' }),
        manifesto: fields.array(fields.text({ label: 'Manifesto Point' }), { label: 'Manifesto Items' }),
        links: fields.array(fields.object({
          name: fields.text({ label: 'Display Name' }),
          url: fields.text({ label: 'URL' }),
          icon: fields.text({ label: 'Icon (e.g., lucide:mail)' }),
        }), { label: 'Contact Links' }),
        cta: fields.object({
          title: fields.text({ label: 'CTA Title' }),
          description: fields.text({ label: 'CTA Description', multiline: true }),
          button_text: fields.text({ label: 'Button Text' }),
          email: fields.text({ label: 'Email' }),
        }),
        content: fields.mdx({ label: 'Long Bio/Content' }),
      },
    }),
  },
});
