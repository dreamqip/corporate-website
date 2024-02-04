import type { People, Projects } from '@/types';

import { client } from '../../sanity/lib/client';

export async function getProjects(): Promise<Projects> {
  return await client.fetch<Projects>('*[_type == "project"]{..., "image": image.asset->url} | order(date desc)');
}

export async function getPeople(): Promise<People> {
  return await client.fetch<People>('*[_type == "person"]{..., "image": image.asset->url} | order(priority asc)');
}

export async function createCollaboration(
  name: string,
  email: string,
  phone: string,
  message: string,
) {
  return await client.create({
    _type: 'contact',
    name,
    email,
    phone,
    message,
  });
}
