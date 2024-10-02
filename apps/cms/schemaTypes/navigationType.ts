import { defineField, defineType } from 'sanity'

export const navigationType = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'headerNavigation',
      title: 'Header Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'link',
              type: 'string',
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'subItems',
              title: 'Submenu Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      type: 'string',
                      validation: rule => rule.required(),
                    }),
                    defineField({
                      name: 'link',
                      type: 'string',
                      validation: rule => rule.required(),
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
})
