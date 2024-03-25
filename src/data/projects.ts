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

export const projects: Project[] = [
	// {
	//     title: 'Youtube Stats',
	//     description: 'Aplicación web para visualizar estadisticas de Youtube',
	//     // image: 'task-manager.webp',
	//     techs: [],
	//     code: '',
	// },
];

export const otherProjects: Project[] = [];
