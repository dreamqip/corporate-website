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
          className='flex flex-1 items-center justify-center self-stretch border-0 bg-background  placeholder:placeholder-opacity-100 focus:outline-none sm:placeholder:placeholder-opacity-0'
          type='text'
          name='name'
          id='name'
          required
        />
      </div>
      <div className='flex border-b-2 border-accent-2'>
        <label
          className='hidden w-36 items-center py-8 sm:flex sm:w-48'
          htmlFor='phone'
        >
          Phone
        </label>
        <input
          className='flex flex-1 items-center justify-center self-stretch border-0 bg-background placeholder:placeholder-opacity-100 invalid:border-b-2 invalid:border-error invalid:ring-error focus:outline-none sm:placeholder:placeholder-opacity-0'
          type='tel'
          name='phone'
          id='phone'
          required
          pattern='[0-9\-\+\(\) ]+'
          title='Only numbers, spaces and these symbols are allowed: ( ) + - .'
        />
      </div>
      <div className='group flex border-b-2 border-accent-2'>
        <label
          className='hidden w-36 items-center py-8 sm:flex sm:w-48'
          htmlFor='email'
        >
          Email
        </label>
        <input
          className='flex flex-1 items-center justify-center self-stretch border-0 bg-background placeholder:placeholder-opacity-100 invalid:border-error invalid:ring-error focus:outline-none sm:placeholder:placeholder-opacity-0'
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
          className='sr-only flex w-36 items-center py-8 sm:not-sr-only sm:w-48'
          htmlFor='message'
        >
          How can we help?
        </label>
        <textarea
          className='flex flex-1 resize-none items-center justify-center self-stretch border-0 bg-background placeholder:opacity-0 focus:outline-none sm:placeholder:opacity-0'
          name='message'
          id='message'
          placeholder='How can we help?'
          required
        />
      </div>
      <button
        className='mt-16 w-36 cursor-pointer p-4 font-medium shadow-[0_0_0_2px] transition-shadow hover:shadow-[0_0_0_4px]'
        type='submit'
      >
        Send
      </button>
    </form>
  );
}
