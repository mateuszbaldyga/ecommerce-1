import { defineField, defineType } from 'sanity'

import type { ImageRule, StringRule, ValidationContext } from 'sanity'

function subMenuValidation(rule: ImageRule | StringRule) {
  return (rule as any).custom((value: unknown, context: ValidationContext) => {
    if ((context.parent as any)?.subMenulayout !== 'list' && !value) {
      return 'This field is required when submenu layout is not "list"'
    }
    return true
  })
}

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
              name: 'subMenulayout',
              title: 'Submenu Layout',
              type: 'string',
              initialValue: 'columns',
              options: {
                layout: 'radio',
                list: [
                  { title: 'Columns', value: 'columns' },
                  { title: 'List', value: 'list' },
                ],
              },
              validation: rule => rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Submenu Background Image',
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
            defineField({
              name: 'subMenuHeading',
              title: 'Submenu Heading',
              type: 'string',
              validation: subMenuValidation,
              hidden: ({ parent }) => parent?.subMenulayout === 'list',
            }),
            defineField({
              name: 'subMenuFooter',
              title: 'Submenu Footer',
              type: 'string',
              validation: subMenuValidation,
              hidden: ({ parent }) => parent?.subMenulayout === 'list',
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
