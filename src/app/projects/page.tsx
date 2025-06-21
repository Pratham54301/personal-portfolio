import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

const allProjects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, a shopping cart, and a secure checkout process.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'e-commerce website',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'TailwindCSS'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative tool for teams to organize tasks, set deadlines, and track progress with an intuitive interface.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'task manager',
    tags: ['React', 'Firebase', 'Framer Motion', 'Node.js'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An analytics dashboard that presents complex data sets through interactive charts and graphs.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'analytics dashboard',
    tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    liveUrl: '#',
    codeUrl: '#',
  },
    {
    title: 'Blogging Platform',
    description: 'A content management system for writers to publish articles, manage content, and engage with readers.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'blogging platform',
    tags: ['Next.js', 'GraphQL', 'Prisma', 'TypeScript'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Social Media Aggregator',
    description: 'A platform that fetches and displays posts from multiple social media APIs in a unified feed.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'social media',
    tags: ['React', 'Node.js', 'OAuth', 'Redis'],
    liveUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Workout Tracker',
    description: 'A mobile-friendly web app to log workouts, monitor fitness goals, and view performance history.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'fitness app',
    tags: ['React Native', 'Firebase', 'Chart.js'],
    liveUrl: '#',
    codeUrl: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">My Projects</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Here is a collection of my work, showcasing my skills in development and design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-lg hover:border-accent">
            <div className="overflow-hidden">
                <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={project.dataAiHint}
                />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
              </div>
              <div className="flex gap-4 mt-auto pt-4">
                <Button asChild>
                  <Link href={project.liveUrl}>Live Demo</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={project.codeUrl}>Source Code</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
