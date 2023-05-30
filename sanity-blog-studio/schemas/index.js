export const schemaTypes = [
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
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
      },
    ],
  },
]
