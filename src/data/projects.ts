import { TechIcons, type Project } from '../types/types';

export const projects: Project[] = [
	{
		title: 'CocoMall E-Commerce',
		description:
			'Coco Mall is an online shopping, a marketplace where you can shop in different stores or create your own store to sell your products. This website offers a comprehensive platform for both shoppers and sellers, enhancing the online shopping experience.',
		imagePath: '/src/assets/coco-mall-project.webp',
		techs: [
			TechIcons.JavaScript,
			TechIcons.Nodejs,
			TechIcons.Express,
			TechIcons.React,
			TechIcons['React Router'],
			TechIcons.Redux,
			TechIcons.PostgreSQL,
			TechIcons.Sequelize,
			TechIcons.JWT,
			TechIcons.Firebase,
			TechIcons.Cloudinary,
			TechIcons['Mercado Pago'],
			TechIcons.Stripe,
		],
		code: 'https://github.com/pablokoll/CocoMall',
		deploy: 'https://coco-mall.vercel.app/',
	},
];

export const otherProjects: Project[] = [
	{
		title: 'Simple URL Shortener',
		description:
			'A Simple URL Shortener is a web-based servicethat takes a long URL and converts it into a shorter, more manageable version. This shortened URL redirects users to the original.',
		imagePath: '',
		techs: [
			TechIcons.Nodejs,
			TechIcons.Express,
			TechIcons.MongoDB,
			TechIcons.NoSQL,
			TechIcons.Bash,
			TechIcons.CSS,
			TechIcons.HTML5,
		],
		code: 'https://github.com/pablokoll/url-shortener',
		deploy: 'https://url-shortener-nwr5.onrender.com',
	},
	{
		title: 'CV Maker',
		description:
			'Awesome CV is a LaTeX template for a CV (Curriculum Vitae), Résumé, or Cover Letter ,it is easy to customize your own template. Additionally, I have customized it using GitHub Actions to update my CV in my portfolio every time the file is updated.',
		imagePath: '',
		techs: [
			TechIcons.Latex,
			TechIcons.Bash,
			TechIcons.GitHub,
			TechIcons['GitHub Actions'],
		],
		code: 'https://github.com/pablokoll/cv/tree/cv/english',
	},
	{
		title: 'The Big Pig Game',
		description:
			'Pig is a simple dice game first described in print by John Scarne in 1945. Players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.',
		imagePath: '',
		techs: [TechIcons['C++'], TechIcons.C, TechIcons.Terminal],
		code: 'https://github.com/pablokoll/BigPigGame',
	},
];
