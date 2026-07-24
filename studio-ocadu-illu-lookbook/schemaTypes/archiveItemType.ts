import {defineField, defineType} from 'sanity'

export const archiveItemType = defineType({
  name: 'archive_item',
  title: 'Archive Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
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
  title: 'Illustrator Name',
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
  description: 'This image will also be used a thumbnail ',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: '200 characters maximum.',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: '200 characters maximum. For accessibility. More information here: https://accessibility.huit.harvard.edu/describe-content-images'
    }),
  ],
}),
defineField({
  name: 'additional_images',
  title: 'Additional Images',
  description: 'JPG, PNG, or GIF. Minimum width: 2400 pixels. This system will store large files and will compress automatically. Files should be large enough for print output.',
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
      title: 'Project Description',
      type: 'array',
      description: 'Maximum character count 5000',
      of: [{type: 'block'}],
    }),
      defineField({
  name: 'keywords',
  title: 'Keywords',
  type: 'array',
  of: [{ type: 'string' }],
  description: 'Add 3-5 relevant keywords to improve discoverability. Use lowercase and avoid special characters.',
  validation: Rule => Rule.max(10).warning('Keep to 10 tags or fewer for best results')
}),
defineField({name: 'tags', title: 'Tags', type: 'tags'}),
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