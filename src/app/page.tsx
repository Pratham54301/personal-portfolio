

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Calendar, Code, Download, Github, GraduationCap, Instagram, Linkedin, PenTool, Star, Twitter, Users, Atom, Cloud, Palette, Facebook, ExternalLink, Server, Database, GitBranch, Terminal, BrainCircuit, TestTube, Share2 } from 'lucide-react';
import Image from 'next/image';
import { Typewriter } from '@/components/typewriter';

import Hero from '/hero.jpg';
import About from '/about.jpg';
import Link from 'next/link';
import { AnimatedCounter } from '@/components/animated-counter';
import { Timeline } from '@/components/timeline';
import { ContactForm } from '@/components/contact-form';
import { ContactSocials } from '@/components/contact-socials';
import { BlogSection } from '@/components/blog-section';
import { ContactDetails } from '@/components/contact-details';
import { ProjectsCarousel } from '@/components/projects-carousel';

const skills = [
    // Frontend
    { name: 'React/Next.js', icon: <Atom className="w-full h-full" /> },
    { name: 'TypeScript', icon: <Code className="w-full h-full" /> },
    { name: 'Redux Toolkit', icon: <Share2 className="w-full h-full" /> },
    { name: 'Tailwind CSS', icon: <Palette className="w-full h-full" /> },
    { name: 'SSR & SSG', icon: <Server className="w-full h-full" /> },
    { name: 'Component Arch.', icon: <GitBranch className="w-full h-full" /> },
    
    // Backend
    { name: 'Node.js/Express', icon: <Server className="w-full h-full" /> },
    { name: 'RESTful APIs', icon: <Share2 className="w-full h-full" /> },
    { name: 'JWT Auth', icon: <Users className="w-full h-full" /> },

    // AI & Data
    { name: 'Gemini Models', icon: <BrainCircuit className="w-full h-full" /> },
    { name: 'LLM Fine-tuning', icon: <BrainCircuit className="w-full h-full" /> },
    { name: 'Sentiment Analysis', icon: <BrainCircuit className="w-full h-full" /> },
    
    // Databases
    { name: 'MongoDB', icon: <Database className="w-full h-full" /> },
    { name: 'Firebase', icon: <Cloud className="w-full h-full" /> },
    { name: 'Mongoose', icon: <Database className="w-full h-full" /> },
    
    // Software Engineering
    { name: 'System Design', icon: <GitBranch className="w-full h-full" /> },
    { name: 'Testing', icon: <TestTube className="w-full h-full" /> },
    { name: 'Git & GitHub', icon: <Github className="w-full h-full" /> },
];


const projects = [
    { title: 'E-commerce Platform', description: 'A full-featured online store with product listings, a shopping cart, and a secure checkout process.', imageUrl: '/project-ecommerce.jpg', dataAiHint: 'e-commerce website', liveUrl: '#', codeUrl: '#' },
    { title: 'Task Management App', description: 'A collaborative tool for teams to organize tasks, set deadlines, and track progress with an intuitive interface.', imageUrl: '/project-task-manager.jpg', dataAiHint: 'task manager', liveUrl: '#', codeUrl: '#' },
    { title: 'Data Visualization Dashboard', description: 'An analytics dashboard that presents complex data sets through interactive charts and graphs.', imageUrl: '/project-dashboard.jpg', dataAiHint: 'analytics dashboard', liveUrl: '#', codeUrl: '#' },
    { title: 'Social Media Feed', description: 'A dynamic feed that displays posts from various social media platforms in real-time.', imageUrl: '/project-social-feed.jpg', dataAiHint: 'social media', liveUrl: '#', codeUrl: '#' },
    { title: 'Weather Forecast App', description: 'Get accurate, up-to-date weather forecasts for any location with a clean and simple UI.', imageUrl: '/project-weather-app.jpg', dataAiHint: 'weather app', liveUrl: '#', codeUrl: '#' },
    { title: 'Recipe Finder', description: 'Search for recipes based on ingredients you have at home, with step-by-step instructions.', imageUrl: '/project-recipe-finder.jpg', dataAiHint: 'recipe book', liveUrl: '#', codeUrl: '#' },
];

const myTimelineItems = [
    {
        icon: <Briefcase />,
        date: '2024 – Present',
        title: 'Senior Software Developer',
        subtitle: 'N R Crew (Remote / Ahmedabad)',
        description: [
            'Led development of full-stack AI-driven applications using Next.js, Node.js, MongoDB, and cloud services.',
            'Architected scalable UI systems, reusable component libraries, and optimized build pipelines.',
            'Implemented end-to-end authentication, RBAC, admin dashboards, and real-time data modules.',
            'Mentored junior developers, performed code reviews, and enforced coding standards.',
            'Improved application performance by 30–40% using memoization, dynamic imports, and caching.'
        ]
    },
    {
        icon: <Briefcase />,
        date: '2023 – 2024',
        title: 'React.js / Next.js Developer',
        subtitle: 'N R Crew (Ahmedabad)',
        description: [
            'Built production-ready UI for enterprise clients using React, Next.js, Tailwind, and custom design systems.',
            'Converted complex Figma designs into pixel-perfect screens with clean architecture.',
            'Integrated REST APIs with robust error states, loaders, retry handlers, and fallback UI.',
            'Enhanced bundle performance (reducing first-load JS up to 25%).'
        ]
    },
    {
        icon: <GraduationCap />,
        date: '2023–Present',
        title: 'B.Tech/B.E. in Computer Science',
        subtitle: 'Silver Oak University | Gota | Ahmedabad',
        description: 'Learning advanced programming, data structures, algorithms, and software development. Preparing for a successful career in software development.'
    },
    {
        icon: <GraduationCap />,
        date: '2022–2023',
        title: '12th – Shri R J Patel Shriji Vidyalaya',
        subtitle: 'Bapunagar | Ahmedabad',
        description: 'Completed 12th Science (A Group) from GSEB with a focus on Mathematics and Physics. Built strong analytical thinking and technical base.'
    },
    {
        icon: <GraduationCap />,
        date: '2020–2021',
        title: '10th – Devasya International School',
        subtitle: 'Vastral | Ahmedabad',
        description: 'I have completed my 10th from GSEB Board with good academic performance. This foundation helped me build strong basics in math, logic, and computer knowledge.'
    }
];


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section id="home" className="min-h-[calc(100vh-5rem)] flex flex-col-reverse md:flex-row items-center justify-center gap-12 py-20">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight h-40 md:h-24">
            <span className="block text-brand-white">Hi, I'm</span>
            <Typewriter texts={['Prathamkumar Sakariya', 'Frontend Developer']} className="text-brand-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
          </h1>
          <p className="text-lg md:text-xl text-brand-light-gray max-w-xl">
            A passionate Frontend developer creating modern, responsive, and user-friendly web applications.
          </p>
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white/90 text-primary hover:bg-white">
            <Link href="https://forms.gle/7axq8mV9Y5T9YhmL8" target="_blank" rel="noopener noreferrer">Inquiry Now</Link>
              </Button>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
               <Link href="www.linkedin.com/in/prathamkumar-sakariya-171851311" aria-label="LinkedIn" className="bg-white/20 text-brand-white p-3 rounded-full inline-flex items-center justify-center hover:bg-white hover:text-primary transition-colors"><Linkedin /></Link>
               <Link href="https://github.com/Pratham54301" aria-label="GitHub" className="bg-white/20 text-brand-white p-3 rounded-full inline-flex items-center justify-center hover:bg-white hover:text-primary transition-colors"><Github /></Link>
               <Link href="https://x.com/prathams54301" aria-label="Twitter" className="bg-white/20 text-brand-white p-3 rounded-full inline-flex items-center justify-center hover:bg-white hover:text-primary transition-colors"><Twitter /></Link>
               <Link href="https://www.instagram.com/pratham_.04_10" aria-label="Instagram" className="bg-white/20 text-brand-white p-3 rounded-full inline-flex items-center justify-center hover:bg-white hover:text-primary transition-colors"><Instagram /></Link>
               <Link href="https://www.facebook.com/pratham.04.10" aria-label="Facebook" className="bg-white/20 text-brand-white p-3 rounded-full inline-flex items-center justify-center hover:bg-white hover:text-primary transition-colors"><Facebook /></Link>
            </div>
          </div>
        </div>
       
        <div className="md:col-span-1 flex justify-center">
            <Image
              src="/hero.jpg"
              alt="Pratham S"
              width={400}
              height={500}
              className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              data-ai-hint="developer portrait"
            />
        </div>
      </section>
     
      {/* About Section */}
      <section id="about" className="py-20">
         <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
            <Image
              src="/about.jpg"
              alt="About Pratham"
              width={400}
              height={500}
              className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              data-ai-hint="workspace desk"
            />
            </div>
            <div className="md:col-span-2 space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">About Me</h2>
              <p className="text-lg text-brand-light-gray">
                  I specialize in building high-quality, production-ready applications with a strong command over modern frontend, backend, AI, and scalable software engineering practices.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="flex flex-col items-center gap-2">
                      <Briefcase className="w-10 h-10 text-brand-violet" />
                      <p className="text-3xl font-bold text-brand-white"><AnimatedCounter value={20} />+</p>
                      <p className="text-brand-light-gray/80">Projects</p>
                  </div>
                   <div className="flex flex-col items-center gap-2">
                      <Calendar className="w-10 h-10 text-brand-violet" />
                      <p className="text-3xl font-bold text-brand-white"><AnimatedCounter value={2} /></p>
                      <p className="text-brand-light-gray/80">Years Experience</p>                  </div>
                   <div className="flex flex-col items-center gap-2">
                      <Users className="w-10 h-10 text-brand-violet" />
                      <p className="text-3xl font-bold text-brand-white"><AnimatedCounter value={15} />+</p>
                      <p className="text-brand-light-gray/80">Happy Clients</p>
                  </div>
                   <div className="flex flex-col items-center gap-2">
                      <Star className="w-10 h-10 text-brand-violet" />
                      <p className="text-3xl font-bold text-brand-white">4.5<span className='text-xl'>★</span></p>
                      <p className="text-brand-light-gray/80">Reviews</p>
                  </div>
              </div>
            </div>
        </div>
      </section>

      {/* Skills & Timeline Section Wrapper */}
      <div className="py-20">
          <div className="container mx-auto">
            {/* Skills Section */}
            <section id="skills" className="mb-20">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 uppercase">My Skills</h2>
              <div className="mx-auto max-w-6xl overflow-hidden">
                <div className="flex gap-8 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {skills.map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center justify-center gap-4 p-4 card-glass card-glass-hover flex-shrink-0 w-40 h-40">
                        <div className="text-brand-violet w-12 h-12">{skill.icon}</div>
                        <p className="font-semibold text-center text-brand-white">{skill.name}</p>
                      </div>
                    ))}
                </div>
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
        <ProjectsCarousel projects={projects} />
      </section>

      {/* Blogs Section */}
      <BlogSection />

      {/* Contact Section */}
      <section id="contact" className="py-20">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Let's Talk</h2>
            <p className="text-brand-light-gray mt-2 max-w-2xl mx-auto">
              I'll get back to you within 24 hours.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 card-glass p-8">
              <ContactDetails />
            </div>
            <div className="lg:col-span-3 card-glass p-8">
              <ContactForm />
            </div>
          </div>
          <ContactSocials />
      </section>
    </div>
  )
}
