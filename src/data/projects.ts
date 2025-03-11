import cocoMallImage from '@assets/coco-mall.webp';
import taskManagement from '@assets/task-manager.webp';
import { type Project, TechIcons } from '../types/types';

export const projects: Project[] = [
    {
        title: 'Task Manager',
        description:
            'The Task Management application enables users to create, update, delete, and manage tasks across different states: to-do, in-progress, and done. The project is built with an Angular frontend and a NestJS backend, utilizing a MongoDB database for storage.',
        image: taskManagement,
        techs: [
            TechIcons.TypeScript,
            TechIcons.Nestjs,
            TechIcons.Nodejs,
            TechIcons.MongoDB,
            TechIcons.Mongoose,
            TechIcons.NoSQL,
            TechIcons.Jest,
            TechIcons.Swagger,
            TechIcons.Angular,
            TechIcons.RxJS,
            TechIcons['Tailwind CSS'],
            TechIcons.Jasmine,
            TechIcons.Karma,
        ],
        code: 'https://github.com/pablokoll/task-management',
    },
    {
        title: 'CocoMall E-Commerce',
        description:
            'Coco Mall is an online shopping, a marketplace where you can shop in different stores or create your own store to sell your products. This website offers a comprehensive platform for both shoppers and sellers, enhancing the online shopping experience.',
        image: cocoMallImage,
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
        title: 'Todo List',
        description:
            'This project is a comprehensive task management system (TODO App) featuring a PHP backend and two similar graphical interfaces, one written in jQuery with AJAX and the other in React.',
        techs: [TechIcons.PHP, TechIcons.jQuery, TechIcons.React, TechIcons.CSS, TechIcons.HTML5],
        code: 'https://github.com/pablokoll/todo-list',
    },
    {
        title: 'Simple URL Shortener',
        description:
            'A Simple URL Shortener is a web-based servicethat takes a long URL and converts it into a shorter, more manageable version. This shortened URL redirects users to the original.',
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
        techs: [TechIcons.Latex, TechIcons.Bash, TechIcons.GitHub, TechIcons['GitHub Actions']],
        code: 'https://github.com/pablokoll/cv/tree/cv/english',
    },
    {
        title: 'The Big Pig Game',
        description:
            'Pig is a simple dice game first described in print by John Scarne in 1945. Players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.',
        techs: [TechIcons.Cplusplus, TechIcons.Terminal],
        code: 'https://github.com/pablokoll/BigPigGame',
    },
];
