import { createContactToNotion } from '@/lib/notion';
import { NextResponse, type NextRequest } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  try {
    const data = await createContactToNotion(name, email, phone, message);

    return NextResponse.json(data, {
      headers: {
        'content-type': 'application/json',
      },
      status: 200,
      statusText: 'Successfully Created',
    });
  } catch {
    return NextResponse.json(
      'An unexpected error occurred and we are unable to send your collaboration. Please try again. If the problem persists, try again later',
      {
        headers: {
          'content-type': 'application/json',
        },
        status: 400,
      },
    );
  }
}
