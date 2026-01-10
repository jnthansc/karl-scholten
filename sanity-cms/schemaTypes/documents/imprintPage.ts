import {DocumentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const imprintPage = defineType({
  name: 'imprintPage',
  title: 'Imprint',
  type: 'document',
  icon: DocumentIcon,
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Imprint',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Imprint'}
    },
  },
})


