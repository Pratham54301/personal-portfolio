'use client';
import { generatedBlogData } from '@/data/blog-data';
import { BlogCard } from './blog-card';

export function BlogSection() {
    // Duplicate the array for a seamless loop
    const duplicatedBlogs = [...generatedBlogData, ...generatedBlogData];

    return (
        <section id="blogs" className="py-20 overflow-x-hidden">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">
                    MY <span className="text-accent">BLOGS</span>
                </h2>
                <p className="text-muted-foreground mt-2">A collection of my thoughts and writings.</p>
            </div>

            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee hover:pause motion-reduce:animate-none">
                    {duplicatedBlogs.map((blog, index) => (
                        <div key={index} className="mx-4 flex-shrink-0">
                             <BlogCard {...blog} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
