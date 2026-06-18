import {defineField, defineType} from 'sanity'

export const archiveItemType = defineType({
  name: 'archive_item',
  title: 'Archive Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  hidden: true,
  options: {
    source: (doc) => `${doc.last_name || ''}-${doc.given_names || ''}`,
    slugify: (input) =>
      input
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .slice(0, 96),
  },
}),
    defineField({
  name: 'profile',
  title: 'profile',
  type: 'reference',
  to: [{ type: 'profile' }],
}),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
      hidden: true
    }),
    defineField({
  name: 'lead_image',
  title: 'Lead Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
}),
defineField({
  name: 'additional_images',
  title: 'Additional Images',
  type: 'array',
  of: [
    {
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    },
  ],
}),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
  name: 'externalLinks',
  title: 'External Links',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
          validation: (Rule) =>
            Rule.required().uri({
              scheme: ['http', 'https'],
            }),
        },
      ],
      preview: {
        select: {
          title: 'title',
          subtitle: 'url',
        },
      },
    },
  ],
})
  ],
})