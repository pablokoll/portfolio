import presentationImage from '../assets/presentation.webp'

export type Social = {
  name: string;
  link: string;
};

export type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile: ImageMetadata;
  openToWork?: boolean;
};

export const presentation: Presentation = {
  mail: "pablokollm@gmail.com",
  title: "Pablo Koll",
  description: "Desarrollador Web con 3 años de experiencia",
  openToWork: true,
  profile: presentationImage,
  socials: [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/pablo-koll/",
    },
    {
      name: "Github",
      link: "https://github.com/pablokoll",
    },
    {
      name: "Gitlab",
      link: "https://gitlab.com/pablokoll"
    }
  ],
};
