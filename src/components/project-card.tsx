import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint: string;
  liveUrl: string;
  codeUrl: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-accent flex flex-col h-full">
      <div className="relative">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-auto object-cover transition-transform duration-300"
          data-ai-hint={project.dataAiHint}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button asChild>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              Source
            </Link>
          </Button>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-primary">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
    </Card>
  );
}
