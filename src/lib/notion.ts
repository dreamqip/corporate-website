import { Client, isNotionClientError } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

export const createContactToNotion = async (
  name: string,
  email: string,
  phone: string,
  message: string,
) => {
  const databaseId = `${process.env.NOTION_CONTACT_DATABASE_ID}`;

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
    if (isNotionClientError(error)) {
      throw new Error(error.message);
    }

    throw new Error('Unfortunatly, something bad happened. Try again later.');
  }
};

export const getPeopleFullPageOrPartialPage = async () => {
  const databaseId = `${process.env.NOTION_PEOPLE_DATABASE_ID}`;

  try {
    return await notion.databases.query({
      database_id: databaseId,
    });
  } catch (error) {
    if (isNotionClientError(error)) {
      throw new Error(error.message);
    }

    throw new Error('Unfortunatly, something bad happened. Try again later.');
  }
};

export const getProjectsFullPageOrPartialPage = async () => {
  const databaseId = `${process.env.NOTION_PROJECTS_DATABASE_ID}`;

  try {
    return await notion.databases.query({
      database_id: databaseId,
    });
  } catch (error) {
    if (isNotionClientError(error)) {
      throw new Error(error.message);
    }

    throw new Error('Unfortunatly, something bad happened. Try again later.');
  }
};
