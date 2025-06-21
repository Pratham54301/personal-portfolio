export type BlogCategory = 'React' | 'CSS' | 'Frontend';

export type Blog = {
  category: BlogCategory;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  authorName: string;
  authorImg: string;
};

const categories: BlogCategory[] = ['React', 'CSS', 'Frontend'];
const sampleTitles = [
    'Component Design Patterns', 'Advanced State Management', 'Performance Optimization', 'Building a Design System',
    'CSS Grid vs. Flexbox', 'Mastering CSS Animations', 'Next-Gen CSS Selectors', 'Utility-First CSS',
    'The Rise of Server Components', 'Micro-Frontends Explained', 'WebAssembly for JS Devs', 'API Design Best Practices'
];
const sampleSummaries = [
    'Learn how to structure your components for maximum reusability and maintainability.',
    'Discover advanced techniques for managing complex application state with context and reducers.',
    'Tips and tricks to make your web applications faster and more responsive.',
    'A step-by-step guide to creating a cohesive and scalable design system from scratch.',
    'A comprehensive comparison to help you choose the right layout tool for the job.',
    'Bring your UIs to life with stunning animations and transitions using pure CSS.',
    'Unlock new possibilities with modern CSS selectors like :has() and :is().',
    'Understand the philosophy and benefits of using a utility-first approach like Tailwind CSS.',
    'How server components are changing the way we build web applications with frameworks like Next.js.',
    'An architectural approach to breaking down large frontend monoliths into smaller, manageable pieces.',
    'Explore how WebAssembly can be used to run high-performance code in the browser.',
    'Principles for designing robust, scalable, and easy-to-use APIs for your applications.'
];

export const generatedBlogData: Blog[] = Array.from({ length: 30 }, (_, i) => {
    const category = categories[i % categories.length];
    const title = `${category}: ${sampleTitles[i % sampleTitles.length]}`;
    const summary = sampleSummaries[i % sampleSummaries.length];
    const date = `Oct ${30 - (i % 30)}, 2025`;
    return {
        category,
        title,
        summary,
        date,
        tags: ['Tips', 'Web', category],
        authorName: 'Pratham S',
        authorImg: 'https://placehold.co/40x40.png',
    };
});
