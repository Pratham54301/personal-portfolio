
'use client';

import {
  Briefcase,
  CheckCircle,
  Code,
  ExternalLink,
  Github,
  Server,
  Database,
  BrainCircuit
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type Project = {
  title: string;
  category: string;
  description: string;
  details: string[];
  tech: string[];
  imageUrl: string;
  dataAiHint: string;
  liveUrl: string;
  codeUrl: string;
};

type ProjectsGridProps = {
  projects: Project[];
};

const techIcons: { [key: string]: React.ReactNode } = {
    'Next.js': <Code className="w-4 h-4" />,
    'Node.js': <Server className="w-4 h-4" />,
    'Flask': <Server className="w-4 h-4" />,
    'Gemini API': <BrainCircuit className="w-4 h-4" />,
    'MongoDB': <Database className="w-4 h-4" />,
    'Tailwind CSS': <Code className="w-4 h-4" />,
    'Redux': <Code className="w-4 h-4" />,
    'Python': <Code className="w-4 h-4" />,
    'Cron Jobs': <Code className="w-4 h-4" />,
    'Stripe': <Code className="w-4 h-4" />,
    'UploadCare': <Code className="w-4 h-4" />,
    'Webhooks': <Code className="w-4 h-4" />,
    'Socket.io': <Code className="w-4 h-4" />,
    'Redis': <Database className="w-4 h-4" />,
    'JWT': <Code className="w-4 h-4" />,
    'Admin Panel': <Code className="w-4 h-4" />,
    'Framer Motion': <Code className="w-4 h-4" />,
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="bg-card/50 backdrop-blur-md border border-border/10 shadow-lg rounded-2xl flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-accent/50">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                        <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                           <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5" /></Link>
                        </Button>
                         <Button variant="ghost" size="icon" asChild>
                           <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-5 h-5" /></Link>
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {project.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 mt-1 text-accent-green-neon flex-shrink-0" />
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/10">
                    {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="flex items-center gap-1">
                             {techIcons[tech] || <Code className="w-4 h-4" />}
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
      ))}
    </div>
  );
}
