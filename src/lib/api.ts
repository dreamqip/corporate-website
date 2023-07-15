import type { Person, Project } from '@/types';

export const getPeople = async () => {
  const res = await fetch(`${process.env.HOST}/api/people`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return (await res.json()) as Person[];
};

export const getProjects = async () => {
  const res = await fetch(`${process.env.HOST}/api/projects`);

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return (await res.json()) as Project[];
};
