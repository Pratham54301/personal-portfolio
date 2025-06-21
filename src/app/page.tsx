import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Database, Monitor, PenTool } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  { icon: <Code className="w-8 h-8 text-primary" />, title: 'Frontend', description: 'React, Next.js, TypeScript, TailwindCSS' },
  { icon: <Database className="w-8 h-8 text-primary" />, title: 'Backend', description: 'Node.js, Express, Firebase, MongoDB' },
  { icon: <Monitor className="w-8 h-8 text-primary" />, title: 'DevOps', description: 'Docker, Vercel, Git & GitHub' },
  { icon: <PenTool className="w-8 h-8 text-primary" />, title: 'Design', description: 'Figma, UI/UX Principles' },
]

const projects = [
    { title: 'Project One', description: 'A brief description of this amazing project.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'web application', liveUrl: '#', codeUrl: '#' },
    { title: 'Project Two', description: 'Another fantastic project with cool features.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'mobile app', liveUrl: '#', codeUrl: '#' },
    { title: 'Project Three', description: 'This one challenged me and I learned a lot.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'dashboard analytics', liveUrl: '#', codeUrl: '#' },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="text-center py-20 md:py-32">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-4 text-primary">
          Hi, I&apos;m Pratham S
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          A passionate developer creating modern, responsive, and user-friendly web applications.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">My Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      <section id="skills" className="py-20">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <Card key={skill.title} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{skill.icon}</div>
                <CardHeader className="p-0">
                    <CardTitle className="font-headline text-xl">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                    <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="flex justify-between items-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <Button asChild variant="link" className="text-primary">
                <Link href="/projects">View All <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <Card key={project.title} className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:border-accent">
                    <Image src={project.imageUrl} alt={project.title} width={600} height={400} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={project.dataAiHint} />
                    <CardHeader>
                        <CardTitle className="font-headline text-primary">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex gap-4">
                            <Button asChild>
                                <Link href={project.liveUrl}>Live Demo</Link>
                            </Button>
                             <Button asChild variant="outline">
                                <Link href={project.codeUrl}>Source</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>
    </div>
  )
}
