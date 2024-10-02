import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
const singletonTypes = new Set(['navigation'])

export default defineConfig({
  name: 'default',
  title: 'ecommerce-1-cms',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',

  plugins: [
    structureTool({
      structure: S =>
        S.list().title('Content').items([
          // Navigation singleton
          S.listItem().title('Navigations').id('navigation').child(
            S.document()
              .title('Navigations')
              .schemaType('navigation')
              .documentId('navigation'),
          ),
          // Pages
          S.documentTypeListItem('page').title('Pages'),
          // Add other document types here
        ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global "New document" menu options
    templates: templates =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
})
