import { getProjectsFullPageOrPartialPage } from '@/lib/notion';
import { isFullPage } from '@notionhq/client';
import { NextResponse } from 'next/server';
import type { Project } from '@/types';

export const runtime = 'edge';

export async function GET() {
  const rawData = await getProjectsFullPageOrPartialPage();

  const projects: Project[] = [];

  for (const page of rawData.results) {
    if (!isFullPage(page)) {
      continue;
    }

    const project = {
      id: page.id,
      name:
        page.properties.Name.type === 'title'
          ? page.properties.Name.title[0].plain_text
          : '',
      description:
        page.properties.Description.type === 'rich_text'
          ? page.properties.Description.rich_text[0].plain_text
          : '',
      image:
        page.properties.Image.type === 'files'
          ? page.properties.Image.files[0].name
          : '',
      tags:
        page.properties.Tags.type === 'multi_select'
          ? page.properties.Tags.multi_select.map((tag) => tag.name)
          : [],
      date:
        page.properties.Date.type === 'date'
          ? page.properties.Date.date?.start
          : '',
    };

    projects.push(project);
  }

  if (projects.length === 0) {
    return NextResponse.json('No projects found.', {
      headers: {
        'content-type': 'application/json',
      },
      status: 404,
    });
  }

  return NextResponse.json(projects, {
    headers: {
      'content-type': 'application/json',
    },
    status: 200,
  });
}
