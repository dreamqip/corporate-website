import type { SchemaTypeDefinition } from 'sanity';

export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => Rule.regex(/[0-9\-\+\(\) ]+/),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
  ],
} satisfies SchemaTypeDefinition;
