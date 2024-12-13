import type { ImageMetadata } from 'astro';
import type { Icon } from 'astro/runtime/client/dev-toolbar/ui-library/icons.js';

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

export enum LinkTreeIcons {
	Portfolio = 'portfolio',
	LinkedIn = 'linkedintree',
	GitHub = 'github',
	CURRICULUM = 'curriculum',
}

export type Link = {
	name: string;
	url: string;
	icon: LinkTreeIcons;
	target: '_blank' | '_self' | '_parent' | '_top';
};

export type Linktree = {
	title: string;
	image: ImageMetadata;
};

export enum TechIcons {
	Spring = 'spring',
	React = 'react',
	Angular = 'angular',
	RxJS = 'rxjs',
	Java = 'java',
	JWT = 'jwt',
	JUnit = 'junit',
	MongoDB = 'mongodb',
	Mongoose = 'mongoose',
	MySQL = 'mysql',
	PostgreSQL = 'postgresql',
	'SQL Server' = 'sqlserver',
	TypeScript = 'typescript',
	JavaScript = 'javascript',
	Docker = 'docker',
	Django = 'django',
	Python = 'python',
	PHP = 'php',
	jQuery = 'jquery',
	Git = 'git',
	Swagger = 'swagger',
	'Tailwind CSS' = 'tailwindcss',
	CSS = 'css',
	HTML5 = 'html5',
	Gitlab = 'gitlab',
	AWS = 'aws',
	Nodejs = 'nodejs',
	Express = 'express',
	Nestjs = 'nestjs',
	Linux = 'linux',
	Ubuntu = 'ubuntu',
	Prisma = 'prisma',
	Sequelize = 'sequelize',
	Redis = 'redis',
	NoSQL = 'nosql',
	Redux = 'redux',
	Vue = 'vue',
	'Mercado Pago' = 'mercadopago',
	Stripe = 'stripe',
	'React Router' = 'reactrouter',
	Firebase = 'firebase',
	Cloudinary = 'cloudinary',
	Bash = 'bash',
	Cplusplus = 'cplusplus',
	C = 'c',
	Terminal = 'terminal',
	Latex = 'latex',
	'GitHub Actions' = 'githubactions',
	GitHub = 'github',
	Jest = 'jest',
	Mocha = 'mocha',
	Jasmine = 'jasmine',
	Karma = 'karma'
}

export interface IconMap {
	[key: string]: (props: { className?: string }) => Icon;
  }

export type Project = {
	title: string;
	description: string;
	image?: ImageMetadata;
	techs: TechIcons[];
	code: string;
	deploy?: string;
	isComingSoon?: boolean;
};

export type Experience = {
	title: string;
	company: string;
	company_link: string;
	date_start: string;
	date_end: string;
	description: string[];
};
