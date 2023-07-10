type Languages = 'C' | 'C++' | 'Java' | 'C#' | 'JS' | 'HTML' | 'Python' | 'Bash' | 'SLANG';
type CSSTechnology = 'TailwidCSS' | 'CSS Modules' | 'Styled Components' | 'SASS' | 'LESS' | 'PostCSS' | 'CSS in JS' | 'Sass Modules'
type JSTechnology = 'React' | 'Angular' | 'Vue' | 'Svelte' | 'Ember' | 'Backbone' | 'jQuery' | 'Vanilla JS' | 'JS' | 'TS' | 'TypeScript' | 'Redux' | 'Service Workers'
type Frameworks = 'NextJS' | 'Vite' | 'Gatsby' | 'CRA' | 'Django' | 'Unity' | 'Android'
type Libs = 'mailgun.js' | 'imgui' | 'glfw' | 'allauth' | 'OpenCV' | 'Kafka' | 'JUnit' | 'Mockito' | 'ARCore' | 'JavaFX'
type Databases = 'MySQL' | 'MariaDB' | 'MongoDB' | 'ElasticSearch' | 'Redis' | 'PostgreSQL' | 'SQLite' | 'Cassandra' | 'CouchDB' | 'Neo4j' | 'DynamoDB' | 'Firebase' | 'CockroachDB'

type Deployments = 'Google Cloud Platform' | 'Firebase' | 'DigitalOcean' | 'Railway' | 'Heroku' | 'Netlify'
| 'Vercel' | 'AWS' | 'Azure' | 'Docker' | 'Kubernetes' | 'GitHub Pages'
| 'GitLab Pages' | 'Bitbucket Pages' | 'Surge' | 'Render' | 'Fly' | 'Cloudflare Workers' | 'Cloudflare KV'
| 'Cloudflare Durable Objects' | 'Cloudflare Stream' | 'Cloudflare Workers KV' | 'Cloudflare Pages'

export type Technologies = Languages | CSSTechnology | JSTechnology | Frameworks | Deployments | Libs | Databases

export interface Project {
    title: string;
    image?: string;
    logo?: string;
    link?: string;
    websiteLink?: string;
    linkTitle?: string;
    tags?: string[];
    description: string;
    technologies: Technologies[];
}

export interface Work {
    startDate: string;
    endDate: string;
    company: string;
    title: string;
    description: string;
    technologies: Technologies[];
}

export interface IPortfolioConfig {
    work: Work[],
    projects: Project[],
}
