import presentationImage from '../assets/pablo-koll.webp';
import type { Presentation } from '../types/types';

export const presentation: Presentation = {
	mail: 'pablokollm@gmail.com',
	title: 'Pablo Koll',
	description:
		'Software Developer with 3 years of experience in Web Development',
	openToWork: true,
	profile: presentationImage,
	socials: [
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/pablo-koll/',
		},
		{
			name: 'Github',
			link: 'https://github.com/pablokoll',
		},
		{
			name: 'Gitlab',
			link: 'https://gitlab.com/pablokoll',
		},
	],
};
