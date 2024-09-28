import { defineField, defineType } from 'sanity'

export const imageBlockType = defineType({
  name: 'imageBlock',
  type: 'object',
  title: 'Image Block',
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
      name: 'images',
      type: 'array',
      title: 'Images',
      validation: rule => rule.required().max(2),
      of: [
        defineField({
          name: 'image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }),
          ],
        }),
      ],
    }),
  ],
})
