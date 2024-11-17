import { IPortfolioConfig } from './portfolioConfig.types';

export const portfolioConfig: IPortfolioConfig = {
    work: [
        {
            startDate: 'APR 2020',
            endDate: 'PRESENT',
            company: 'Goldman Sachs',
            title: 'Software Engineer',
            description: 'Development and maintenance of microservices for real-time processing, aggregation, and analytics of financial transactions',
            technologies: ['Java', 'Python', 'SLANG', 'Kafka', 'Vertx', 'MongoDB', 'ElasticSearch', 'JUnit', 'Mockito', 'ReactJS', 'TypeScript', 'CSS Modules']
        },
        {
            startDate: 'JAN 2018',
            endDate: 'APR 2020',
            company: 'Samsung R&D Institute',
            title: 'Software Engineer',
            description: 'Research and development of Augmented Reality projects for Visual Entertainment group',
            technologies: ['Java', 'Python', 'C++', 'C#', 'Android', 'Unity', 'ARCore', 'JavaFX', 'Docker']
        }
    ],
    projects: [
        {
            title: 'gaussian gradient',
            description: 'Generator of radial gradient with Gaussian distribution stops and dither simulating mask for reducing visual banding.',
            link: 'https://github.com/kkuchar2/smooth-gradient',
            websiteLink: 'https://smooth-gradient.vercel.app/',
            technologies: ['Vercel', 'NextJS', 'React', 'TS', 'Sass Modules', 'shadcn/ui']
        },
        {
            title: 'sorting visualiser',
            description: 'NextJS website that visualizes sorting algorithm using ThreeJS Fiber and service workers. Changes in sorted data are shown with red marker and synthesized sound.',
            link: 'https://github.com/kkuchar2/sorting-visualizer',
            websiteLink: 'https://sortingvis.kkucharski.com/',
            technologies: ['Vercel', 'React', 'TS', 'Sass Modules', 'TailwidCSS', 'Service Workers']
        },
        {
            title: 'emcia.design',
            description: 'UI/UX Designer’s portfolio website showcasing current work, resume and allowing users to send mail directly from browser',
            link: 'https://github.com/kkuchar2/emcia.design',
            websiteLink: 'https://emcia-design-lqxhxdm30-kkuchar2.vercel.app/',
            technologies: ['Vercel', 'NextJS', 'React', 'TS', 'Styled Components', 'TailwidCSS', 'Sass Modules', 'mailgun.js']
        },
        {
            title: 'openglengine',
            description: 'Project as integration of OpenGL rendering system into graphical user interface. Used for testing, learning and experimentation.',
            link: 'https://github.com/kkuchar2/openglengine',
            technologies: ['C++', 'imgui', 'glfw']
        },
        {
            title: 'distribution data generator',
            description: 'Small program to generate data files for normal, laplace and uniform random distributions.',
            link: 'https://github.com/kkuchar2/distribution-data-generator',
            technologies: ['C++']
        },
        {
            title: 'libmpeg7',
            description: 'Engineers degree project: Library with implementation of MPEG-7 digital image descriptors calculation and comparison algorithms with Python and Java wrappers. Refactored slowly after time',
            link: 'https://github.com/kkuchar2/libmpeg7',
            technologies: ['C++', 'Python', 'Java', 'OpenCV']
        },
        {
            title: 'this website',
            description: 'This website is my personal portfolio showcasing my work, projects, experience resume and useful links',
            link: 'https://github.com/kkuchar2/kkucharski',
            websiteLink: 'https://kkucharski.com',
            technologies: ['Vercel', 'NextJS', 'React', 'TS', 'TailwidCSS', 'Sass Modules']
        }
    ]
};
