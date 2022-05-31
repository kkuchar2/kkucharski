export interface ProjectData {
    name: string;
    stack: string;
    description: string;
    npm?: string;
    github: string;
    website?: string;
}

export const projects: ProjectData[] = [
    {
        name: 'kuchkr-react-component-library',
        stack: 'React, TypeScript, RollupJS, StoryBook, Firebase',
        description: 'Small React components library for personal usage',
        npm: 'https://www.npmjs.com/package/kuchkr-react-component-library',
        github: 'https://github.com/kkuchar2/kuchkr-react-component-library',
        website: 'https://components.kkucharski.com/'
    },
    {
        name: 'openglengine',
        stack: 'C++, CMake',
        description: 'Project as integration of OpenGL rendering system into graphical user interface. Used for testing, learning and experimentation.',
        github: 'https://github.com/kkuchar2/openglengine',
    },
    {
        name: 'react-sorting-visualiser',
        stack: 'ReactJS, TypeScript, Webpack, webworkers, ThreeJS, Firebase',
        description: 'Realtime sorting algorithm visualiser',
        github: 'https://github.com/kkuchar2/react-sorting-visualizer',
        website: 'https://sortingvis.kkucharski.com/'
    },
    {
        name: 'react-django-administration',
        stack: 'ReactJS, TypeScript, Webpack, Firebase',
        description: 'React frontend for Django server to manage accounts and tables',
        github: 'https://github.com/kkuchar2/react-django-administration'
    },
    {
        name: 'axios-client-wrapper',
        stack: 'ReactJS, TypeScript, RollupJS, StoryBook',
        description: 'Small library for personal usage wrapping axios library with Redux functionality.',
        npm: 'https://www.npmjs.com/package/axios-client-wrapper',
        github: 'https://github.com/kkuchar2/axios-client-wrapper',
    },
    {
        name: 'docker-django-backend',
        stack: 'Docker, docker-compose, Django, MySQL, DigitalOcean, Google Cloud Storage',
        description: 'Django server & MySQL database in Docker - API and data source for all of my future projects',
        github: 'https://github.com/kkuchar2/kuchkr-react-component-library',
    },
    {
        name: 'libmpeg7',
        stack: 'C++, C, Python, Java, JNI',
        description: '🎓 Engineers degree project: Library with implementation of MPEG-7 digital image descriptors calculation and comparison algorithms with Python and Java wrappers',
        github: 'https://github.com/kkuchar2/libmpeg7',
    }
];

export interface EducationData {
    school: string;
    title: string;
    description: string;
    startTime: string;
    endTime: string;
}

export const education: EducationData[] = [
    {
        school: 'Warsaw University of Technology',
        title: 'Bachelor of Science in Engineering, Telecommunication',
        description: 'MPEG-7 library for image classification (C++, Java, Python, JNI, ctypes)',
        startTime: '2012',
        endTime: '2015'
    },
    {
        school: 'Warsaw University of Technology',
        title: 'MSc in Engineering, Telecommunication',
        description: 'Remote objects recognition in images with CNN (Python, Java, caffee, mxnet)',
        startTime: '2015',
        endTime: '2017'
    }
]

export interface WorkData {
    company: string;
    title: string;
    description: string;
    startTime: string;
    endTime: string;
}

export const work: WorkData[] = [
    {
        company: 'Goldman Sachs',
        title: 'Analyst & Associate',
        description: 'Maintaining and developing features for financial platform based on microservices architecture. (Java, SLANG, ReactJS).',
        startTime: 'April 2020',
        endTime: 'Present'
    },
    {
        company: 'Samsung R&D Institute Poland',
        title: 'Software Engineer',
        description: 'Augmented Reality research for Visual Entertainment team. Android applications with Unity and ARCore',
        startTime: 'January 2018',
        endTime: 'April 2020'
    }
]
