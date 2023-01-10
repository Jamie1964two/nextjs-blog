import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'notice',
  title: 'Notices',
  type: 'document',
  fields: [
    defineField({
      name: 'display',
      title: 'Display on site?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      // author: 'author.name',
      //media: 'mainImage',
    },
    prepare(selection) {
      //const {author} = selection
      return {...selection}
      //return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
