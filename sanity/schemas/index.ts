import { type SchemaTypeDefinition } from 'sanity';
import { default as person } from './person';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [person],
};
