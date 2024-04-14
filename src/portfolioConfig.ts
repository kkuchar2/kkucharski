import { IPortfolioConfig } from './portfolioConfig.types';

export const portfolioConfig: IPortfolioConfig = {
    work: [
        {
            startDate: 'APR 2020',
            endDate: 'PRESENT',
            company: 'Goldman Sachs',
            title: 'Associate · Software Engineer',
            description: 'Maintaining and developing features for financial platform based on microservices architecture. (Java, SLANG, ReactJS).',
            technologies: ['Java', 'Kafka', 'MongoDB', 'SLANG', 'JUnit', 'Mockito', 'React', 'TypeScript', 'CSS Modules']
        },
        {
            startDate: 'JAN 2018',
            endDate: 'APR 2020',
            company: 'Samsung R&D Institute',
            title: 'Associate · Software Engineer',
            description: 'Augmented Reality research for Visual Entertainment team. Android applications with Unity and ARCore',
            technologies: ['Java', 'Android', 'Unity', 'ARCore', 'C#', 'JavaFX']
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
            description: 'UI/UX Designer’s portfolio website showcasing current work, resume and allowing users to send mail directly from browser',
            link: 'https://github.com/kkuchar2/kkucharski',
            websiteLink: 'https://kkucharski.com',
            technologies: ['Vercel', 'NextJS', 'React', 'TS', 'TailwidCSS', 'Sass Modules']
        }
    ]
};
