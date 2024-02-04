import { type SchemaTypeDefinition } from 'sanity';
import { default as project } from './project';
import { default as person } from './person';
import { default as contact } from './contact';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, person, contact],
};
