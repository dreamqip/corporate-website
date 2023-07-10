type Project = {
  title: string;
  description: string;
  image: string;
  date: Date;
  tags: string[];
};

// TODO: We can store all of our data in Notion and use Notion's API to fetch it.
// This way we can update our data without having to redeploy the site, or manually update the data in the code.

export const PROJECTS: Project[] = [
  {
    title: 'Treadle Lifestyle App',
    description:
      'Rewards its users with in-game cryptocurrency and NFTs for cycling and promoting environmental sustainability.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: new Date('2022-11-21'),
    tags: ['NEAR Protocol'],
  },
  {
    title: 'Project Existence',
    description:
      'A decentralized social media platform that rewards its users with cryptocurrency for posting and interacting with content.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: new Date('2023-03-02'),
    tags: ['Fantom'],
  },
  {
    title: 'The Vayua Metaverse',
    description:
      'A decentralized virtual world that rewards its users with cryptocurrency for interacting with the environment and other users.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: new Date('2023-08-01'),
    tags: ['Fantom'],
  },
];

type Person = {
  name: string;
  title: string;
  image: string;
  location: string;
};

export const PEOPLE: Person[] = [
  {
    name: 'Denys Kravchuk',
    title: 'Co-Founder / CEO',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    location: 'Kyiv, Ukraine',
  },
  {
    name: 'Illia Malovanyi',
    title: 'Co-Founder / CTO',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    location: 'London, UK',
  },
  {
    name: 'Bulat Khaertdinov',
    title: 'Machine Learning Engineer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    location: 'Amsterdam, Netherlands',
  },
  {
    name: 'Ruslan Melnyk',
    title: 'Smart Contract Engineer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    location: 'Warsaw, Poland',
  },
  {
    name: 'Vladyslav Chuchupak',
    title: 'Frontend Engineer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    location: 'Warsaw, Poland',
  },
  {
    name: 'Dmytro Shevchenko',
    title: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    location: 'Kyiv, Ukraine',
  },
  {
    name: 'David Litunovskyi',
    title: 'Motion Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    location: 'South Carolina, US',
  },
  {
    name: 'Anna Isaenko',
    title: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    location: 'Kyiv, Ukraine',
  },
  {
    name: 'Vladyslav Orlovskyi',
    title: 'Business Analyst',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    location: 'India, Pune',
  },
  {
    name: 'Volodymyr Sheremeta',
    title: 'Business Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    location: 'Berlin, Germany',
  },
  {
    name: 'Ivan Solomakha',
    title: 'Business Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    location: 'Kyiv, Ukraine',
  }
];
