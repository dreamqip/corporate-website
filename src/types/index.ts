export type Person = {
  id: string;
  name: string;
  title: string;
  image: string;
  location: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  date: string | undefined;
};
