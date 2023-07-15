import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Card from '@/components/ProjectCard';
import { getPeople, getProjects } from '@/lib/api';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

export const revalidate = 60;

export default async function Home() {
  const people = await getPeople();
  const projects = await getProjects();

  return (
    <>
      <Navbar />

      <main className='container flex min-h-screen flex-col items-center justify-between'>
        <section className='mx-auto grid max-w-3xl place-items-start sm:place-items-center py-10 sm:py-16'>
          <h1
            className='flex w-full flex-col flex-wrap justify-center text-left text-5xl font-bold tracking-tight text-accent-5 sm:items-center md:flex-row'
            aria-label='Empower. Innovate. Transcend.'
          >
            <span
              data-content='Empower.'
              className='relative block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:block before:w-full before:animate-gradient-background-1 before:text-accent-5 before:content-[attr(data-content)] sm:before:px-1 sm:before:text-center'
            >
              <span className='animate-gradient-foreground-1 bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent sm:px-1'>
                {' '}
                Empower.
              </span>
            </span>
            <span
              data-content='Innovate.'
              className='relative block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:block before:w-full before:animate-gradient-background-2 before:text-accent-5 before:content-[attr(data-content)] sm:before:px-1 sm:before:pl-3 sm:before:text-center'
            >
              <span className='animate-gradient-foreground-2 bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent sm:px-1 sm:pl-3'>
                {' '}
                Innovate.
              </span>
            </span>
            <span
              data-content='Transcend.'
              className='relative block before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:block before:w-full before:animate-gradient-background-3 before:text-accent-5 before:content-[attr(data-content)] sm:before:px-1 sm:before:text-center'
            >
              <span className='animate-gradient-foreground-3 bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent sm:px-1'>
                {' '}
                Transcend.
              </span>
            </span>
          </h1>
          <h2 className='mt-4 text-left text-lg text-accent-5 sm:text-center'>
            <Balancer>
              We are a strategic web3 agency that empowers its clients to adopt
              blockchain technology for the good of their businesses.
            </Balancer>
          </h2>
          <a
            className='mt-8 w-36 cursor-pointer p-4 text-center text-lg font-medium shadow-[0_0_0_2px] transition-shadow hover:shadow-[0_0_0_4px]'
            href='#collaboration'
          >
            Collaborate
          </a>
          <div className='mt-16'>
            <video
              autoPlay
              loop
              muted
              playsInline
              poster='/moon.jpg'
              className=''
              src='/moon.mp4'
            />
          </div>
        </section>
        <section className='scroll-mt-16 py-10 sm:py-16' id='projects'>
          <div className='mx-auto w-full max-w-3xl'>
            <h3
              className='text-left text-4xl font-bold sm:text-center'
              aria-label='We create products that make a difference.'
            >
              <span className='text-accent-6'>We</span> create products{' '}
              <br className='block sm:hidden' />
              <span className='text-accent-6'>that</span> make a difference.
            </h3>
            <h4 className='mt-4 text-left text-lg tracking-tight text-accent-6 sm:text-center'>
              <Balancer>
                We do not just build products, but engineer experiences that
                transform businesses and lives, and contribute to shaping the
                future of the market.
              </Balancer>
            </h4>
          </div>
          <div className='mt-16 flex max-w-4xl flex-wrap justify-center gap-8'>
            {projects.map((post) => (
              <div key={post.id} className='grid w-full md:w-[calc(50%-2rem)]'>
                <Card {...post} />
              </div>
            ))}
          </div>
        </section>
        <section className='scroll-mt-16 py-10 sm:py-16' id='people'>
          <div className='mx-auto w-full max-w-4xl'>
            <h3
              className='text-left text-4xl font-bold sm:text-center'
              aria-label='We speak 6 languages and live in 6 countries.'
            >
              <span className='text-accent-6'>We speak</span>{' '}
              <br className='block sm:hidden' /> 6 languages{' '}
              <span className='text-accent-6'>and live in</span> 6 countries.
            </h3>
            <h4 className='mt-4 text-left text-lg tracking-tight text-accent-6 sm:text-center'>
              <Balancer>
                We are a dynamic group of individuals who are passionate about
                what we do and dedicated to delivering the best results for our
                clients.
              </Balancer>
            </h4>
          </div>
          <div className='mt-16 flex max-w-6xl flex-wrap justify-center gap-8'>
            {people.map((person) => (
              <div
                key={person.id}
                className='group w-full sm:w-[calc(50%-2rem)] md:w-[calc(33%-2rem)] lg:w-[calc(25%-2rem)]'
              >
                <div className='relative overflow-hidden'>
                  <Image
                    src={person.image}
                    alt={`${person.name}'s avatar`}
                    width={274}
                    height={274}
                    className='h-72 w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent transition-all duration-300 group-hover:opacity-0' />
                </div>
                <h3 className='mt-4 text-lg font-medium sm:text-xl'>
                  {person.name}
                </h3>
                <p className='mt-2 text-accent-6'>{person.title}</p>
                <p className='mt-2 text-sm text-accent-5'>{person.location}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          className='grid scroll-mt-16 gap-16 py-10 sm:py-16'
          id='collaboration'
        >
          <div className='mx-auto w-full max-w-2xl'>
            <h3
              className='text-left text-4xl font-bold sm:text-center'
              aria-label='We speak 6 languages and live in 6 countries.'
            >
              <span className='text-accent-6'>We are</span>{' '}
              <br className='block sm:hidden' /> open{' '}
              <span className='text-accent-6'>to</span> new collaborations.
            </h3>
            <h4 className='mt-4 text-left text-lg tracking-tight text-accent-6 sm:text-center'>
              <Balancer>
                Our philosophy is to work with partners who demonstrate a
                commitment to developing and shaping the future of the market.
              </Balancer>
            </h4>
          </div>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </>
  );
}
