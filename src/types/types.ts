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
	Resume = 'resume',
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
	CSharp = 'csharp',
	Godot = 'godot',
	Java = 'java',
	JWT = 'jwt',
	Hibernate = 'hibernate',
	JUnit = 'junit',
	MongoDB = 'mongodb',
	MySQL = 'mysql',
	PostgreSQL = 'postgresql',
	SQLServer = 'sqlserver',
	TypeScript = 'typescript',
	JavaScript = 'javascript',
	Docker = 'docker',
	Django = 'django',
	Python = 'python',
	Git = 'git',
	Swagger = 'swagger',
	TailwindCSS = 'tailwindcss',
	Unity = 'unity',
	Gitlab = 'gitlab',
	AWS = 'aws',
	Nodejs = 'nodejs',
	Express = 'express',
	Nestjs = 'nestjs',
	Ubuntu = 'ubuntu',
	Prisma = 'prisma',
	Sequelize = 'sequelize',
	Redis = 'redis',
	NoSQL = 'nosql',
	Redux = 'redux',
	Vue = 'vue',
}

export type Project = {
	title: string;
	description: string;
	image?: string;
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
