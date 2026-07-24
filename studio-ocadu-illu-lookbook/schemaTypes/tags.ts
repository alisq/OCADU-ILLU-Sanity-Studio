/**
 * tags.ts
 * A reusable `tags` object — one multi-select array field per category.
 * Register in schemaTypes and embed with:  defineField({name: 'tags', type: 'tags'})
 */

import {defineType, defineField} from 'sanity'
import {
  traditionalMedia,
  digitalMedia,
  publishingEditorial,
  commercialApplied,
  entertainment,
  fineArtGallery,
  fashionLifestyle,
  processMaterial,
  narrativeConceptual,
  stylistic,
  subjectMatter,
  professionalPractice,
  type TagOption,
} from './tagOptions'

/** Helper: builds a checkbox-list array-of-strings field. */
const tagField = (name: string, title: string, list: TagOption[]) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [{type: 'string'}],
    options: {
      list,
      layout: 'grid', // swap to 'tags' for a compact token input
    },
  })

export const tags = defineType({
  name: 'tags',
  title: 'Tags',
  type: 'object',
  options: {collapsible: true, collapsed: false},
  fields: [
    tagField('traditionalMedia', 'Traditional Media', traditionalMedia),
    tagField('digitalMedia', 'Digital Media', digitalMedia),
    tagField('publishingEditorial', 'Publishing & Editorial', publishingEditorial),
    tagField('commercialApplied', 'Commercial & Applied Illustration', commercialApplied),
    tagField('entertainment', 'Entertainment', entertainment),
    tagField('fineArtGallery', 'Fine Art & Gallery Practice', fineArtGallery),
    tagField('fashionLifestyle', 'Fashion & Lifestyle', fashionLifestyle),
    tagField('processMaterial', 'Process & Material Exploration', processMaterial),
    tagField('narrativeConceptual', 'Narrative & Conceptual', narrativeConceptual),
    tagField('stylistic', 'Stylistic Keywords', stylistic),
    tagField('subjectMatter', 'Subject Matter', subjectMatter),
    tagField('professionalPractice', 'Professional Practice', professionalPractice),
  ],
  preview: {
    select: {
      a: 'traditionalMedia',
      b: 'digitalMedia',
      c: 'subjectMatter',
    },
    prepare({a = [], b = [], c = []}) {
      const picked = [...a, ...b, ...c]
      return {
        title: picked.length ? picked.slice(0, 3).join(', ') : 'No tags',
        subtitle: picked.length > 3 ? `+${picked.length - 3} more` : undefined,
      }
    },
  },
})

export default tags
