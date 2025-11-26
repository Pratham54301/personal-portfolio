
'use client';
import { blogData } from '@/data/blog-data';
import { BlogCard } from './blog-card';

export function BlogSection() {
    return (
        <section id="blogs" className="py-20">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    MY <span className="text-accent-green-neon">ARTICLES</span>
                </h2>
                <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    A collection of my thoughts on architecture, AI, and high-performance engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogData.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                ))}
            </div>
        </section>
    )
}
