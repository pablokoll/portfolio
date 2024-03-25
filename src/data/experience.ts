export type Experience = {
	title: string;
	company: string;
	company_link: string;
	date_start: string;
	date_end: string;
	description: string[];
};

export const experience: Experience[] = [
	{
		title: 'Backend Developer',
		company: 'Balloon Group',
		company_link: 'https://www.linkedin.com/company/balloon-group/',
		date_start: 'Jan 2023',
		date_end: 'Present',
		description: [
			'My integral components of my technology stack and development environment are Node.js (Typescript/Javascript), Docker, and Ubuntu (Linux). My primary focus lies on Express.js and Nest.js frameworks.',
			`I'm a Backend Developer specializing in microservices for eCommerce, I bring expertise from working with platforms like Magento and Vtex.`,
			'I adeptly handle REST, SOAP, and GraphQL APIs, along with protocols such as HTTPS, SFTP, and SMTP to facilitate seamless communication across diverse software systems.',
			'I implemented robust queuing systems, websockets, and efficient caching mechanisms.',
			'For secure access management, I employed methods like OAuth 2.0 and JWT.',
			'To ensure application quality and reliability, I utilize both end-to-end (E2E) and unit testing.',
			'My deployment process is streamlined through CI/CD practices, and I hosted applications efficiently on cloud services like AWS.',
		],
	},
	{
		title: 'Full Stack Developer',
		company: 'Balloon Group',
		company_link: 'https://www.linkedin.com/company/balloon-group/',
		date_start: 'Nov 2021',
		date_end: 'Dec 2023',
		description: [
			'I leverage various JavaScript frameworks and libraries for Frontend application development, including React, Vue.js, Next.js, and even vanilla JS.',
			'I created web applications following SOLID principles and utilized architectures such as Single Page Applications (SPA) and Server-Side Rendering (SSR).',
			'I applied diverse design patterns like Model-View-Controller (MVC), Singleton, and Factory to efficiently structure code.',
			'I used Figma to design detailed and user-centric models.',
			'I implemented effective optimization strategies to improve the search engines (SEO).',
		],
	},
];
