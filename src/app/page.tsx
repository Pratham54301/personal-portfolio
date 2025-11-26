

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Calendar, Code, Download, Github, GraduationCap, Instagram, Linkedin, PenTool, Star, Twitter, Users, Atom, Cloud, Palette, Facebook, ExternalLink, Server, Database, GitBranch, Terminal, BrainCircuit, TestTube, Share2 } from 'lucide-react';
import Image from 'next/image';
import { Typewriter } from '@/components/typewriter';

import Link from 'next/link';
import { AnimatedCounter } from '@/components/animated-counter';
import { Timeline } from '@/components/timeline';
import { ContactForm } from '@/components/contact-form';
import { ContactSocials } from '@/components/contact-socials';
import { BlogSection } from '@/components/blog-section';
import { ContactDetails } from '@/components/contact-details';
import { ProjectsGrid } from '@/components/projects-grid';

const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'SSR/SSG', 'Component Architecture', 'Performance Optimization'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT/Auth', 'Real-time APIs', 'Microservices fundamentals'],
    },
    {
      title: 'AI & Data',
      skills: ['Gemini / Fine-tuned LLM Models', 'Sentiment Analysis', 'Financial ML Models'],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'Firebase', 'Mongoose', 'Aggregation Pipelines'],
    },
    {
      title: 'Software Engineering',
      skills: ['System Design', 'Scalability Patterns', 'Testing (Unit & Integration)', 'Git/GitHub', 'Documentation'],
    },
];

const projects = [
    {
        title: 'TradeMind.AI – AI Stock & Crypto Pattern Predictor',
        category: 'SaaS Platform',
        description: 'An AI-driven platform for real-time market prediction and sentiment analysis.',
        details: [
            'Designed full architecture for real-time market prediction dashboards',
            'Implemented News + Twitter Sentiment Analysis (NLP) with scoring algorithms',
            'Built daily AI Market Digest with automated email reports',
            'Created admin panel for models, indicators, and user analytics',
        ],
        tech: ['Next.js', 'Node.js', 'Flask', 'Gemini API', 'MongoDB', 'Tailwind CSS'],
        imageUrl: '/project-trademind.jpg',
        dataAiHint: 'stock market dashboard',
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'E-Commerce with Admin Panel',
        category: 'Full-Stack System',
        description: 'A complete e-commerce solution with a scalable backend and rich analytics.',
        details: [
            'Complete product workflow (products, filters, carts, orders, users)',
            'Built scalable backend with clean controllers + advanced queries',
            'Added testing, role-based routing, and dashboard analytics',
        ],
        tech: ['Next.js', 'Redux', 'Node.js', 'MongoDB'],
        imageUrl: '/project-ecommerce-admin.jpg',
        dataAiHint: 'e-commerce dashboard',
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'PlayFlow Gaming Platform',
        category: 'Frontend System',
        description: 'A high-performance gaming platform with a focus on UI/UX and animation.',
        details: [
            'Designed multi-section landing experience with premium animations',
            'Built scoring system and optimized UI rendering for 10,000+ users',
        ],
        tech: ['Next.js', 'Tailwind', 'Framer Motion'],
        imageUrl: '/project-playflow.jpg',
        dataAiHint: 'gaming platform',
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'AI-Powered Resume Scoring & Job-Match Engine',
        category: 'SaaS Product',
        description: 'An intelligent system that scores resumes and matches candidates to jobs.',
        details: [
            'AI system that scans resumes and scores them using NLP',
            'Job-matching logic using weighted ML models + ATS keyword analysis',
            'Automated weekly email reports with personalized job suggestions',
            'Multi-tenant architecture with admin dashboards',
            'Achieved 92% accuracy on job-match scoring tests',
        ],
        tech: ['Next.js', 'Python', 'Gemini API', 'MongoDB', 'Tailwind', 'Cron Jobs'],
        imageUrl: '/project-resume-scorer.jpg',
        dataAiHint: 'resume analysis',
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'Multi-Vendor Marketplace',
        category: 'Full-Stack Enterprise System',
        description: 'A scalable marketplace platform for vendors, buyers, and administrators.',
        details: [
            'Architected marketplace for vendors, buyers, and admins',
            'Vendor onboarding, earnings dashboard, payouts, analytics',
            'Integrated Stripe Connect with real-time webhook events',
            'Server-side rendering, caching, and image optimization',
            'Scalable architecture supporting 100K+ products',
        ],
        tech: ['Next.js', 'Node.js', 'Stripe', 'MongoDB', 'UploadCare', 'Webhooks'],
        imageUrl: '/project-marketplace.jpg',
        dataAiHint: 'online marketplace',
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'Real-Time Chat & Collaboration Suite',
        category: 'Slack-like System',
        description: 'A multi-workspace collaboration application with real-time features.',
        details: [
            'Features: channels, DMs, read receipts, file uploads, typing status',
            'Redis pub/sub for scalable message broadcasting',
            'Message search using MongoDB text indexing',
            'Scales to 50K concurrent active users',
        ],
        tech: ['Next.js', 'Socket.io', 'Node.js', 'Redis', 'JWT', 'Tailwind'],
        imageUrl: '/project-chat-app.jpg',
        dataAiHint: 'chat application',
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        title: 'Enterprise HRMS System',
        category: 'Payroll, Leave, Attendance',
        description: 'A comprehensive HR management system for company-wide operations.',
        details: [
            'Modules: onboarding, payroll, attendance, leave approvals',
            'Automated salary slips + monthly payroll processor',
            'Added audit logs, admin analytics, secure multi-role access',
        ],
        tech: ['Next.js', 'Node.js', 'MongoDB', 'Cron Jobs', 'JWT', 'Admin Panel'],
        imageUrl: '/project-hrms.jpg',
        dataAiHint: 'hr dashboard',
        liveUrl: '#',
        codeUrl: '#'
    },
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
            <span className="block">Hi, I'm</span>
            <Typewriter texts={['Prathamkumar Sakariya', 'software developer']} className="text-primary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
          Strong experience with system design, API architecture, CI/CD workflows, team mentorship, code reviews, and leading end-to-end product development.
          </p>
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
            <Link href="#contact">Inquiry Now</Link>
              </Button>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
               <Link href="www.linkedin.com/in/prathamkumar-sakariya-171851311" aria-label="LinkedIn" className="bg-secondary text-secondary-foreground p-3 rounded-full inline-flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin /></Link>
               <Link href="https://github.com/Pratham54301" aria-label="GitHub" className="bg-secondary text-secondary-foreground p-3 rounded-full inline-flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><Github /></Link>
               <Link href="https://x.com/prathams54301" aria-label="Twitter" className="bg-secondary text-secondary-foreground p-3 rounded-full inline-flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><Twitter /></Link>
               <Link href="https://www.instagram.com/pratham_.04_10" aria-label="Instagram" className="bg-secondary text-secondary-foreground p-3 rounded-full inline-flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><Instagram /></Link>
               <Link href="https://www.facebook.com/pratham.04.10" aria-label="Facebook" className="bg-secondary text-secondary-foreground p-3 rounded-full inline-flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"><Facebook /></Link>
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
               <p className="text-lg text-muted-foreground">
               Senior Software Developer with 4+ years of hands-on experience delivering scalable, high-performance web applications using React.js, Next.js, Node.js, TypeScript, MongoDB, and cloud-first architecture.
Specialized in building SaaS platforms, AI-driven dashboards, real-time systems, and enterprise-grade UI design.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="flex flex-col items-center gap-2">
                      <Briefcase className="w-10 h-10 text-primary" />
                      <p className="text-3xl font-bold"><AnimatedCounter value={8} />+</p>
                      <p className="text-muted-foreground/80">Projects</p>
                  </div>
                   <div className="flex flex-col items-center gap-2">
                      <Calendar className="w-10 h-10 text-primary" />
                      <p className="text-3xl font-bold"><AnimatedCounter value={2} /></p>
                      <p className="text-muted-foreground/80">Years Experience</p>                  </div>
                   <div className="flex flex-col items-center gap-2">
                      <Users className="w-10 h-10 text-primary" />
                      <p className="text-3xl font-bold"><AnimatedCounter value={8} />+</p>
                      <p className="text-muted-foreground/80">Happy Clients</p>
                  </div>
                   <div className="flex flex-col items-center gap-2">
                      <Star className="w-10 h-10 text-primary" />
                      <p className="text-3xl font-bold">4.5<span className='text-xl'>★</span></p>
                      <p className="text-muted-foreground/80">Reviews</p>
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
               <div className="w-full overflow-hidden">
                <div className="flex gap-8 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {skillCategories.map((category) => (
                      <div key={category.title} className="bg-card/50 backdrop-blur-md border border-border/10 shadow-lg rounded-2xl flex-shrink-0 w-[340px] p-6 transition-all duration-300 hover:bg-card/75 hover:border-border/20 hover:shadow-2xl hover:-translate-y-1">
                        <h3 className="font-headline text-xl font-bold text-primary mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill) => (
                            <span key={skill} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
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
        <ProjectsGrid projects={projects} />
      </section>

      {/* Blogs Section */}
      <BlogSection />

      {/* Contact Section */}
      <section id="contact" className="py-20">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Let's Talk</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              I build stable, scalable, and high-performance software systems with a focus on clean architecture. With experience across AI, full-stack development, and SaaS platforms, I deliver solutions that last. Let’s connect and bring your idea to life.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 bg-card/50 backdrop-blur-md border border-border/10 shadow-lg rounded-2xl p-8">
              <ContactDetails />
            </div>
            <div className="lg:col-span-3 bg-card/50 backdrop-blur-md border border-border/10 shadow-lg rounded-2xl p-8">
              <ContactForm />
            </div>
          </div>
          <ContactSocials />
      </section>
    </div>
  )
}
