import image from '../assets/linktree-profile.webp';
import { LinkTreeIcons, type Link, type Linktree } from '../types/types';

export const linktree: Linktree = {
	title: '@pablokoll',
	image: image,
};

export const links: Link[] = [
	{
		name: 'portfolio',
		url: '/portfolio',
		icon: LinkTreeIcons.Portfolio,
		target: '_self',
	},
	{
		name: 'linkedin',
		url: 'https://www.linkedin.com/in/pablo-koll/',
		icon: LinkTreeIcons.LinkedIn,
		target: '_blank',
	},
	{
		name: 'github',
		url: 'https://github.com/pablokoll',
		icon: LinkTreeIcons.GitHub,
		target: '_blank',
	},
	{
		name: 'curriculum',
		url: '/curriculum',
		icon: LinkTreeIcons.CURRICULUM,
		target: '_blank',
	},
];
