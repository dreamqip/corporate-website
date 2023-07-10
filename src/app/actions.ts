'use server';

import { Client } from '@notionhq/client';

export async function sendForm(data: FormData) {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  const databaseId = `${process.env.NOTION_DATABASE_ID}`;

  const name = data.get('name') as string;
  const email = data.get('email') as string;
  const phone = data.get('phone') as string;
  const message = data.get('message') as string;

  try {
    return await notion.pages.create({
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
  } catch (error) {
    throw error;
  }
}
