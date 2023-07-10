import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  date: Date;
  tags: string[];
  image: string;
};

export default function Card({ title, date, tags, image, description }: Props) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <>
      <div className='group relative after:absolute after:inset-0 after:h-full after:w-full after:bg-gradient-to-t after:from-black after:to-transparent'>
        <Image
          className='w-full shadow-[0_4px_4px_0_#000000_0.25] grayscale transition-all duration-300 group-hover:grayscale-0'
          src={image}
          alt={title}
          width={400}
          height={432}
        />
        <div className='absolute bottom-0 left-8 z-10 flex flex-col items-start'>
          <div className='flex items-center'>
            <h4 className='text-accent-6'>{formatter.format(date)}</h4>
            {tags.map((tag) => (
              <span
                key={tag}
                className='ml-3 rounded-2xl bg-[rgba(247,_247,_247,_0.10)] px-2 py-1 text-accent-5 backdrop-blur-md first-of-type:ml-0 sm:first-of-type:ml-3'
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className='mt-3 text-xl font-medium'>{title}</h3>
        </div>
      </div>
      <div className='mt-6 px-8'>
        <p className='text-accent-6'>{description}</p>
      </div>
    </>
  );
}
