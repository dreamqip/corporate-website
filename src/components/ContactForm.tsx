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
      <div className='flex min-h-[9rem] flex-col-reverse border-y-2 border-accent-2 sm:flex-row-reverse'>
        <input
          className='peer/name flex flex-1 items-center justify-center self-stretch border-0 bg-background  text-sm focus:-mb-[2px] focus:border-b-2 focus:outline-none'
          type='text'
          name='name'
          id='name'
          required
        />
        <label
          className='flex w-36 items-center pt-8 text-accent-5 transition-colors peer-focus/name:text-foreground sm:w-48 sm:py-8'
          htmlFor='name'
        >
          Name
        </label>
      </div>
      <div className='flex min-h-[9rem] flex-col-reverse border-b-2 border-accent-2 sm:flex-row-reverse'>
        <input
          className='peer/phone flex flex-1 items-center justify-center self-stretch border-0 bg-background text-sm focus:-mb-[2px] focus:border-b-2 focus:outline-none'
          type='tel'
          name='phone'
          id='phone'
          required
          pattern='[0-9\-\+\(\) ]+'
          title='Only numbers, spaces and these symbols are allowed: ( ) + - .'
        />
        <label
          className='flex w-36 items-center pt-8 text-accent-5 transition-colors peer-focus/phone:text-foreground sm:w-48 sm:py-8'
          htmlFor='phone'
        >
          Phone
        </label>
      </div>
      <div className='flex min-h-[9rem] flex-col-reverse border-b-2 border-accent-2 sm:flex-row-reverse'>
        <input
          className='peer/email flex flex-1 items-center justify-center self-stretch border-0 bg-background text-sm focus:-mb-[2px] focus:border-b-2 focus:outline-none'
          type='email'
          name='email'
          id='email'
          required
          pattern='[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$'
          title='Email (Format: example@test.com)'
        />
        <label
          className='flex w-36 items-center pt-8 text-accent-5 transition-colors peer-focus/email:text-foreground sm:w-48 sm:py-8'
          htmlFor='email'
        >
          Email
        </label>
      </div>
      <div className='flex min-h-[9rem] flex-col-reverse border-b-2 border-accent-2 sm:flex-row-reverse'>
        <textarea
          className='peer/message flex flex-1 resize-none items-center justify-center bg-background text-sm leading-6 placeholder:opacity-0 focus:-mb-[2px] focus:border-b-2 focus:outline-none pt-4 sm:pt-8 sm:placeholder:opacity-0'
          name='message'
          id='message'
          rows={5}
          required
        />
        <label
          className='flex w-36 items-start pt-8 text-accent-5 transition-colors peer-focus/message:text-foreground sm:w-48 sm:py-8'
          htmlFor='message'
        >
          How can we help?
        </label>
      </div>
      <button
        className='mt-16 w-full sm:w-36 cursor-pointer p-4 font-medium shadow-[0_0_0_2px] transition-shadow hover:shadow-[0_0_0_4px]'
        type='submit'
      >
        Send
      </button>
    </form>
  );
}
