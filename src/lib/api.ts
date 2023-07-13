import type { Person, Project } from '@/types';

const revalidate = 86400;

export const getPeople = async () => {
  const res = await fetch(`${process.env.HOST}/api/people`, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return (await res.json()) as Person[];
};

export const getProjects = async () => {
  const res = await fetch(`${process.env.HOST}/api/projects`, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return (await res.json()) as Project[];
};
