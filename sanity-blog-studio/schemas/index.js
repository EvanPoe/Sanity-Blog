export const schemaTypes = [
  {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
      },
    ],
  },
  {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
      },
      {
        name: 'coverImage',
        type: 'image',
        title: 'Cover Image',
      },
      {
        name: 'date',
        type: 'datetime',
        title: 'Date',
        validation: (Rule) => {
          return Rule.required()
        },
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{type: 'author'}],
        validation: (Rule) => {
          return Rule.required()
        },
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        validation: (Rule) => {
          return Rule.required()
        },
      },
    ],
  },
]
