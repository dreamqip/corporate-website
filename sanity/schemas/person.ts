import type { SchemaTypeDefinition } from 'sanity';

export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
  ],
} satisfies SchemaTypeDefinition;
