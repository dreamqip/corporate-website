'use client';

import { type FormEvent, useRef } from 'react';
import { toast } from 'sonner';

export default function ContactForm() {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Creating a new promise to later use with toast.promise to show loading
    const promise = new Promise((resolve, reject) => {
      fetch('/api/contact', {
        method: 'POST',
        body: formData,
      }).then(async (res) => {
        const json = await res.json();
        if (!res.ok) {
          reject(json);
        }

        resolve(json);
      });
    });

    toast.promise(promise, {
      loading: 'Sending...',
      success: () => {
        // ref.current?.reset();
        return 'Message sent!';
      },
      error: (err) => err,
    });
  };

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <div className='flex border-y-2 border-accent-2'>
        <label className='flex w-36 items-center py-8 sm:w-48' htmlFor='name'>
          Name
        </label>
        <input
          className='flex flex-1 items-center justify-center self-stretch border-0 bg-background focus:outline-none'
          type='text'
          name='name'
          id='name'
          required
        />
      </div>
      <div className='flex border-b-2 border-accent-2'>
        <label className='flex w-36 items-center py-8 sm:w-48' htmlFor='phone'>
          Phone
        </label>
        <input
          className='flex flex-1 items-center justify-center self-stretch border-0 bg-background focus:outline-none'
          type='tel'
          name='phone'
          id='phone'
          required
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          title='Phone Number (Format: 123-456-7890)'
        />
      </div>
      <div className='group flex border-b-2 border-accent-2'>
        <label className='flex w-36 items-center py-8 sm:w-48' htmlFor='email'>
          Email
        </label>
        <input
          className='flex flex-1 items-center justify-center self-stretch border-0 bg-background invalid:border-error invalid:ring-error focus:outline-none'
          type='email'
          name='email'
          id='email'
          required
          pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$'
          title='Email (Format: example@test.com)'
        />
      </div>
      <div className='flex border-b-2 border-accent-2'>
        <label
          className='flex w-36 items-center py-8 sm:w-48'
          htmlFor='message'
        >
          How can we help?
        </label>
        <input
          className='flex flex-1 items-center justify-center self-stretch border-0 bg-background focus:outline-none'
          type='text'
          name='message'
          id='message'
          required
        />
      </div>
      <button
        className='mt-16 w-36 cursor-pointer p-4 shadow-[0_0_0_2px] transition-shadow hover:shadow-[0_0_0_4px]'
        type='submit'
      >
        Send
      </button>
    </form>
  );
}
