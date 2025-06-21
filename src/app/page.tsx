import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Calendar, Code, Download, Github, GraduationCap, Instagram, Linkedin, Mail, PenTool, Server, Star, Twitter, Users, Wind, Atom, GitBranch, Cloud, Network, Palette, Database } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedCounter } from '@/components/animated-counter';
import { Timeline } from '@/components/timeline';
import { ContactForm } from '@/components/contact-form';
import { ContactSocials } from '@/components/contact-socials';
import { BlogSection } from '@/components/blog-section';

const skills = [
    { name: 'HTML5', icon: <Code className="w-full h-full" /> },
    { name: 'CSS3', icon: <Palette className="w-full h-full" /> },
    { name: 'JavaScript', icon: <Code className="w-full h-full" /> },
    { name: 'React JS', icon: <Atom className="w-full h-full" /> },
    { name: 'Node.js', icon: <Server className="w-full h-full" /> },
    { name: 'Express.js', icon: <Network className="w-full h-full" /> },
    { name: 'Firebase', icon: <Cloud className="w-full h-full" /> },
    { name: 'MongoDB', icon: <Database className="w-full h-full" /> },
    { name: 'Git', icon: <GitBranch className="w-full h-full" /> },
    { name: 'GitHub', icon: <Github className="w-full h-full" /> },
    { name: 'Figma', icon: <PenTool className="w-full h-full" /> },
    { name: 'Team Management', icon: <Users className="w-full h-full" /> },
];

const projects = [
    { title: 'E-commerce Platform', description: 'A full-featured online store with product listings, a shopping cart, and a secure checkout process.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'e-commerce website', liveUrl: '#', codeUrl: '#' },
    { title: 'Task Management App', description: 'A collaborative tool for teams to organize tasks, set deadlines, and track progress with an intuitive interface.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'task manager', liveUrl: '#', codeUrl: '#' },
    { title: 'Data Visualization Dashboard', description: 'An analytics dashboard that presents complex data sets through interactive charts and graphs.', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'analytics dashboard', liveUrl: '#', codeUrl: '#' },
];

const myTimelineItems = [
    {
        icon: <Briefcase />,
        date: '2024 - Present',
        title: 'Frontend Developer',
        subtitle: 'Some Company, Remote',
        description: 'Developing and maintaining user-facing features using React.js and modern frontend technologies.'
    },
    {
        icon: <GraduationCap />,
        date: '2021 - 2025',
        title: 'B.Tech in Computer Science',
        subtitle: 'ABC Institute of Technology',
        description: 'Completed a comprehensive curriculum focused on software development, algorithms, and data structures.'
    },
     {
        icon: <Briefcase />,
        date: '2023',
        title: 'Data Entry Operator',
        subtitle: 'Freelance',
        description: 'Managed and processed large volumes of data with high accuracy and efficiency.'
    },
    {
        icon: <Briefcase />,
        date: '2022',
        title: 'Booking Executive',
        subtitle: 'Local Travel Agency',
        description: 'Handled customer inquiries and bookings, ensuring a smooth and pleasant travel experience.'
    },
     {
        icon: <GraduationCap />,
        date: '2020 - 2021',
        title: '12th Grade',
        subtitle: 'XYZ Senior Secondary School',
        description: 'Focused on science and mathematics, building a strong analytical foundation.'
    },
     {
        icon: <GraduationCap />,
        date: '2018 - 2019',
        title: '10th Grade',
        subtitle: 'Devsaya International School',
        description: 'Achieved high grades and developed a keen interest in technology and science.'
    },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section id="home" className="min-h-[calc(100vh-5rem)] flex flex-col-reverse md:flex-row items-center justify-center gap-12 text-center md:text-left py-20">
        <div className="space-y-6">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block">Hi, I&apos;m</span>
            <span className="text-primary">Pratham S</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            A passionate full-stack developer creating modern, responsive, and user-friendly web applications.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button asChild size="lg">
              <Link href="/Pratham-Resume.pdf" target="_blank">Download CV <Download className="ml-2" /></Link>
            </Button>
            <div className="flex items-center gap-4">
               <Link href="#" aria-label="LinkedIn" className="text-foreground/80 hover:text-accent transition-colors"><Linkedin /></Link>
               <Link href="#" aria-label="GitHub" className="text-foreground/80 hover:text-accent transition-colors"><Github /></Link>
               <Link href="#" aria-label="Twitter" className="text-foreground/80 hover:text-accent transition-colors"><Twitter /></Link>
               <Link href="#" aria-label="Instagram" className="text-foreground/80 hover:text-accent transition-colors"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-center">
            <div className="relative group w-[280px] h-[400px] lg:w-[320px] lg:h-[450px]">
                <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl">
                    <Image
                        src="https://placehold.co/400x560.png"
                        alt="Pratham S"
                        width={400}
                        height={560}
                        className="w-full h-full object-cover"
                        data-ai-hint="professional portrait developer"
                        priority
                    />
                    {/* Top-left angular cut */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-solid border-t-[60px] lg:border-t-[80px] border-t-accent-green border-r-[60px] lg:border-r-[80px] border-r-transparent"></div>
                    
                    {/* Bottom-right angular cut */}
                    <div className="absolute bottom-0 right-0 w-0 h-0 border-solid border-b-[60px] lg:border-b-[80px] border-b-primary border-l-[60px] lg:border-l-[80px] border-l-transparent"></div>
                </div>
            </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20">
         <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
                <Image src="https://placehold.co/400x500.png" alt="About Pratham S" width={400} height={500} className="rounded-lg shadow-lg" data-ai-hint="developer coding" />
            </div>
            <div className="md:col-span-2 space-y-6">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">About Me</h2>
                <p className="text-lg text-foreground/80">
                    Hello! I&apos;m Pratham, a dedicated and results-oriented developer with a passion for building beautiful, functional, and user-centric digital experiences. My journey into web development started from a deep curiosity about how things work on the internet, and it has since evolved into a fulfilling career where I get to solve complex problems and bring ideas to life.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <Briefcase className="w-10 h-10 text-primary" />
                        <p className="text-3xl font-bold"><AnimatedCounter value={7} /></p>
                        <p className="text-muted-foreground">Projects</p>
                    </div>
                     <div className="flex flex-col items-center gap-2">
                        <Calendar className="w-10 h-10 text-primary" />
                        <p className="text-3xl font-bold"><AnimatedCounter value={1} /></p>
                        <p className="text-muted-foreground">Years Experience</p>
                    </div>
                     <div className="flex flex-col items-center gap-2">
                        <Users className="w-10 h-10 text-primary" />
                        <p className="text-3xl font-bold"><AnimatedCounter value={5} /></p>
                        <p className="text-muted-foreground">Happy Clients</p>
                    </div>
                     <div className="flex flex-col items-center gap-2">
                        <Star className="w-10 h-10 text-primary" />
                        <p className="text-3xl font-bold"><AnimatedCounter value={5} /></p>
                        <p className="text-muted-foreground">Reviews</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Skills & Timeline Section Wrapper */}
      <div className="py-20 -mx-4 px-4 sm:mx-0 sm:rounded-2xl dark:bg-slate-900 dark:text-white">
          <div className="container mx-auto">
            {/* Skills Section */}
            <section id="skills" className="mb-20">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 uppercase">My Skills</h2>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg bg-card dark:bg-slate-800 border border-border dark:border-slate-700 hover:border-accent-green-neon hover:-translate-y-1 transition-all duration-300">
                    <div className="text-accent-green-neon w-12 h-12">{skill.icon}</div>
                    <p className="font-semibold text-center">{skill.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Timeline Section */}
            <section id="timeline">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 uppercase">My Timeline</h2>
              <Timeline items={myTimelineItems} />
            </section>
          </div>
      </div>


      {/* Projects Section */}
      <section id="projects" className="py-20">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <Card key={project.title} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-accent">
                    <div className="relative">
                        <Image src={project.imageUrl} alt={project.title} width={600} height={400} className="w-full h-auto object-cover transition-transform duration-300" data-ai-hint={project.dataAiHint} />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <Button asChild>
                                <Link href={project.liveUrl} target="_blank">Live Demo</Link>
                            </Button>
                             <Button asChild variant="secondary">
                                <Link href={project.codeUrl} target="_blank">Source</Link>
                            </Button>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="font-headline text-primary">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      {/* Blogs Section */}
      <BlogSection />

      {/* Contact Section */}
      <section id="contact" className="py-20">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Contact Me</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Drop me a line.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1 space-y-6">
                <div className="flex items-center gap-4">
                    <Mail className="w-8 h-8 text-primary"/>
                    <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <p className="text-muted-foreground">prathams54301@gmail.com</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <Linkedin className="w-8 h-8 text-primary"/>
                    <div>
                        <h3 className="font-semibold text-lg">LinkedIn</h3>
                        <p className="text-muted-foreground">pratham-s</p>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
          <ContactSocials />
      </section>
    </div>
  )
}
