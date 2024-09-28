import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  fields: [
    defineField({
      name: 'headingPart1',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'headingPart2',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required(),
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
  ],
})
