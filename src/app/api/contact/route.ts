import { createCollaboration } from '@/lib/api';
import { NextResponse, type NextRequest } from 'next/server';

export const runtime = 'edge';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const { name, email, phone, message } = Object.fromEntries(
    formData,
  ) as FormData;

  try {
    const data = await createCollaboration(name, email, phone, message);

    return NextResponse.json(data, {
      headers: {
        'content-type': 'application/json',
      },
      status: 200,
      statusText: 'Successfully Created',
    });
  } catch (e) {
    return NextResponse.json(
      `An unexpected error occurred and we are unable to send your collaboration. Please try again. If the problem persists, try again later. Error: ${e}`,
      {
        headers: {
          'content-type': 'application/json',
        },
        status: 500,
      },
    );
  }
}
