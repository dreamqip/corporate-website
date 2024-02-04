export type People = Person[];
export type Person = {
  _id: string;
  name: string;
  role: string;
  image: string;
  location: string;
};

export type Projects = Project[];
export type Project = {
  _id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  date: string | undefined;
};
