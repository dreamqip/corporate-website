'use client';

import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Projects', href: '#projects', current: false },
  { name: 'People', href: '#people', current: false },
  { name: 'Collaboration', href: '#collaboration', current: false },
];

export default function Navbar() {
  return (
    <Disclosure
      as='nav'
      className='sticky top-0 z-50 bg-background/80 backdrop-blur-lg'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='relative flex h-24 items-center justify-between sm:h-32'>
              <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-accent-6 hover:bg-accent-2/50 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-foreground'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-1 items-start justify-start sm:items-stretch sm:justify-between'>
                <a className='flex flex-shrink-0 items-center' href='#'>
                  <Image
                    className='block w-auto'
                    src='/logotype.svg'
                    width={182}
                    height={24}
                    alt="Manuvantara's logo"
                  />
                </a>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-8'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='text-base font-medium capitalize text-accent-6 transition-colors duration-200 hover:text-foreground'
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='grid space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className='rounded-md p-2 text-lg transition-colors duration-200 hover:bg-accent-2/40 hover:text-foreground'
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
