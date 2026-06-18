import {defineField, defineType} from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'last_name',
      title: 'Last Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'given_names',
      title: 'Given Names',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  hidden: true,
  options: {
    source: (doc) => `${doc.given_names || ''}-${doc.last_name || ''}`,
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
  name: 'profile_label',
  title: 'Profile Label',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    list: [
      { title: 'Current Instructor', value: 'current-instructor' },
      { title: 'Past Instructor', value: 'past-instructor' },
      { title: 'Alumnus', value: 'alumnus' },
      { title: 'Medal Winner', value: 'medal-winner' },
      { title: 'Industry Award Winner', value: 'industry-award-winner' },
    ],
    layout: 'grid',
  },
}),
     defineField({
      name: 'body',
      title: 'Biography',
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

  preview: {
    select: {
      lastName: 'last_name',
      givenNames: 'given_names',
    },
    prepare({ lastName, givenNames }) {
      return {
        title: ` ${givenNames} ${lastName}`,
      }
    },
  },
})
