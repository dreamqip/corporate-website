import { Client, isNotionClientError } from '@notionhq/client';
import { NextResponse, type NextRequest } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const notion = new Client({ auth: process.env.NOTION_KEY });
  const databaseId = `${process.env.NOTION_DATABASE_ID}`;

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  try {
    const res = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Phone: {
          phone_number: phone,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
        Date: {
          date: {
            start: new Date().toISOString().split('T')[0],
          },
        },
      },
    });

    return NextResponse.json(res, {
      headers: {
        'content-type': 'application/json',
      },
      status: 200,
      statusText: 'Successfully Created',
    });
  } catch (error) {
    if (isNotionClientError(error)) {
      return NextResponse.json(
        'Unfortunatly, something bad happened. Try again later.',
        {
          headers: {
            'content-type': 'application/json',
          },
          status: 400,
        },
      );
    }

    return NextResponse.json('Something went wrong. Try again later.', {
      headers: {
        'content-type': 'application/json',
      },
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
}
