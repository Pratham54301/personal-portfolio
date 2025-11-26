export type BlogCategory = 'Frontend' | 'Backend' | 'AI' | 'Architecture' | 'SaaS';

export type Blog = {
  category: BlogCategory;
  title: string;
  summary: string;
  tags: string[];
};

export const blogData: Blog[] = [
    {
        category: 'Architecture',
        title: 'Building Scalable Frontend Architectures with React & Next.js',
        summary: 'Insights on SSR/SSG, optimization, caching, and component patterns for large systems.',
        tags: ['React', 'Next.js', 'Performance', 'System Design'],
    },
    {
        category: 'Backend',
        title: 'Designing Real-Time Systems with WebSockets & Redis',
        summary: 'How to architect real-time chat, notifications, and presence tracking like enterprise apps.',
        tags: ['WebSockets', 'Redis', 'Node.js', 'Real-Time'],
    },
    {
        category: 'AI',
        title: 'AI in Production – Integrating LLMs into SaaS Platforms',
        summary: 'Patterns for using Gemini/LLMs, prompt engineering, fine-tuning, and monitoring.',
        tags: ['Gemini', 'LLM', 'SaaS', 'AI/ML'],
    },
    {
        category: 'Backend',
        title: 'Mastering Microservices & API Gateways in Node.js',
        summary: 'Designing services, load balancing, rate-limiting, and distributed workflows.',
        tags: ['Microservices', 'Node.js', 'API Gateway', 'Architecture'],
    },
    {
        category: 'AI',
        title: 'Building ML-Driven Market Predictors for Stocks & Crypto',
        summary: 'How sentiment, indicators, and time-series models power financial predictions.',
        tags: ['AI/ML', 'Finance', 'Python', 'Data Science'],
    },
    {
        category: 'SaaS',
        title: 'Enterprise-Grade Authentication & Role Systems in Modern Apps',
        summary: 'JWT, refresh tokens, RBAC, multi-tenant architecture, and security patterns.',
        tags: ['Auth', 'Security', 'JWT', 'RBAC'],
    },
    {
        category: 'Backend',
        title: 'Optimizing MongoDB for High-Traffic Applications',
        summary: 'Aggregation pipelines, indexing, schema design, and performance tuning.',
        tags: ['MongoDB', 'Database', 'Performance', 'NoSQL'],
    },
    {
        category: 'SaaS',
        title: 'Creating Multi-Tenant SaaS Architectures with Next.js',
        summary: 'Techniques for subscription systems, team workspaces, and admin dashboards.',
        tags: ['SaaS', 'Next.js', 'Multi-Tenancy', 'Architecture'],
    },
];
