import { defineArrayMember, defineField, defineType } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: rule => rule.required().error(`Required to generate a page on the website`),
      hidden: ({ document }) => !document?.title,
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'hero',
        }),
        defineArrayMember({
          type: 'imageBlock',
        }),
      ],
    }),
  ],
})
