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
        date_start: 'Ene 2023',
        date_end: 'Actualidad',
        description: [
            'Utilización de Nodejs (Typescript/Javascript), Docker y Ubuntu (Linux) como parte de mi stack tecnológico y entorno de desarrollo. Predominando el uso de Expressjs y Nestjs.',
            'Desarrollador Backend especializado en microservicios para Ecommerces, con experiencia en plataformas como Magento y Vtex.',
            'Manejo de APIs REST, SOAP, y GraphQL, y protocolos como HTTPS, SFTP, y SMTP para mantener la comunicación con diversos softwares.',
            'Implementación de sistemas de colas, websockets, y caché en la aplicación.',
            'Utilización de OAuth 2.0 y JWT para la gestión segura de accesos.',
            'Prácticas de pruebas E2E y unitarias para garantizar la calidad y fiabilidad de las aplicaciones.',
            'Uso de prácticas de CI/CD y alojamiento en AWS para mantenimiento eficiente y despliegue.',
        ],
    },
    {
        title: 'Full Stack Developer',
        company: 'Balloon Group',
        company_link: 'https://www.linkedin.com/company/balloon-group/',
        date_start: 'Nov 2021',
        date_end: 'Dic 2023',
        description: [
            'Utilización de distintos frameworks y bibliotecas de Javascript para el desarrollo de las aplicaciones Frontend como React, Vuejs, Nextjs e incluso Javascript vanilla.',
            'Creé aplicaciones web siguiendo los principios SOLID, y utilicé arquitecturas como las Aplicaciones de Página Única (SPA) y el Renderizado del lado del Servidor (SSR).',
            'Apliqué diversos patrones de diseño como el Modelo-Vista-Controlador (MVC), Singleton y Factory para estructurar el código de manera eficiente.',
            'Utilización de Figma para diseñar modelos detallados y centrados en el usuario.',
            'Implementé estrategias efectivas de optimización para motores de búsqueda (SEO)',
        ],
    },
];
