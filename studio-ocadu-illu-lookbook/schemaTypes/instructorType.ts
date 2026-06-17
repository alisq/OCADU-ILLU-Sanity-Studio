import {defineField, defineType} from 'sanity'

export const instructorType = defineType({
  name: 'instructor',
  title: 'Instructor',
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
      name: 'body',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}],
    }),
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
