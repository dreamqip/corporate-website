import Image from 'next/image';
import { Project } from '@/types';

type Props = Project;

export default function ProjectCard({
  name,
  date,
  tags,
  image,
  description,
}: Props) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <>
      <div className='group relative overflow-hidden'>
        <Image
          className='aspect-[3/2] w-full overflow-hidden border-none object-cover outline-none grayscale transition-all duration-300 group-hover:grayscale-0'
          src={image}
          alt={name}
          width={400}
          height={432}
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent transition-all duration-300' />
        <div className='absolute bottom-0 left-8 z-10 flex flex-col items-start'>
          <div className='flex items-center'>
            <h4 className='text-accent-6'>
              {formatter.format(new Date(date || ''))}
            </h4>
            {tags.map((tag) => (
              <span
                key={tag}
                className='ml-3 rounded-2xl bg-[rgba(247,_247,_247,_0.10)] px-2 py-1 text-sm text-accent-5 backdrop-blur-md first-of-type:ml-3'
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className='mt-3 text-xl font-medium'>{name}</h3>
        </div>
      </div>
      <div className='px-8 pb-8 pt-6'>
        <p className='text-lg text-accent-6'>{description}</p>
      </div>
    </>
  );
}
