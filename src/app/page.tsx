import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Calendar, Code, Download, Github, GraduationCap, Instagram, Linkedin, PenTool, Star, Twitter, Users, Atom, Cloud, Palette, Facebook, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedCounter } from '@/components/animated-counter';
import { Timeline } from '@/components/timeline';
import { ContactForm } from '@/components/contact-form';
import { ContactSocials } from '@/components/contact-socials';
import { BlogSection } from '@/components/blog-section';
import { ContactDetails } from '@/components/contact-details';
import { ProjectsCarousel } from '@/components/projects-carousel';

const skills = [
    { name: 'HTML5', icon: <Code className="w-full h-full" /> },
    { name: 'CSS3', icon: <Palette className="w-full h-full" /> },
    { name: 'JavaScript', icon: <Code className="w-full h-full" /> },
    { name: 'React JS', icon: <Atom className="w-full h-full" /> },
    { name: 'Firebase', icon: <Cloud className="w-full h-full" /> },
    { name: 'GitHub', icon: <Github className="w-full h-full" /> },
    { name: 'Figma', icon: <PenTool className="w-full h-full" /> },
    { name: 'Adobe XD', icon: <PenTool className="w-full h-full" /> },
    { name: 'Team Management', icon: <Users className="w-full h-full" /> },
    { name: 'Project Management', icon: <Briefcase className="w-full h-full" /> },
];

const projects = [
    { title: 'E-commerce Platform', description: 'A full-featured online store with product listings, a shopping cart, and a secure checkout process.', imageUrl: 'https://picsum.photos/seed/e-commerce/600/400', dataAiHint: 'e-commerce website', liveUrl: '#', codeUrl: '#' },
    { title: 'Task Management App', description: 'A collaborative tool for teams to organize tasks, set deadlines, and track progress with an intuitive interface.', imageUrl: 'https://picsum.photos/seed/task-manager/600/400', dataAiHint: 'task manager', liveUrl: '#', codeUrl: '#' },
    { title: 'Data Visualization Dashboard', description: 'An analytics dashboard that presents complex data sets through interactive charts and graphs.', imageUrl: 'https://picsum.photos/seed/dashboard/600/400', dataAiHint: 'analytics dashboard', liveUrl: '#', codeUrl: '#' },
    { title: 'Social Media Feed', description: 'A dynamic feed that displays posts from various social media platforms in real-time.', imageUrl: 'https://picsum.photos/seed/social-feed/600/400', dataAiHint: 'social media', liveUrl: '#', codeUrl: '#' },
    { title: 'Weather Forecast App', description: 'Get accurate, up-to-date weather forecasts for any location with a clean and simple UI.', imageUrl: 'https://picsum.photos/seed/weather-app/600/400', dataAiHint: 'weather app', liveUrl: '#', codeUrl: '#' },
    { title: 'Recipe Finder', description: 'Search for recipes based on ingredients you have at home, with step-by-step instructions.', imageUrl: 'https://picsum.photos/seed/recipe-finder/600/400', dataAiHint: 'recipe book', liveUrl: '#', codeUrl: '#' },
];

const myTimelineItems = [
    {
        icon: <Briefcase />,
        date: 'August 2024 – Present',
        title: 'Frontend Developer',
        subtitle: 'N R Crew Software Pvt. Ltd. | Ahmedabad',
        description: [
            'Built user-centric websites using HTML, CSS, JS',
            'Introduced new tech and coding standards',
            'Developed CMS and optimized code base'
        ]
    },
    {
        icon: <Briefcase />,
        date: 'August 2024 – September 2024',
        title: 'Data Entry Operator',
        subtitle: 'Solaimalai Enterprises | Ahmedabad',
        description: [
            'Managed customer data and engaged effectively',
            'Maintained database accuracy and performed routine maintenance'
        ]
    },
    {
        icon: <Briefcase />,
        date: 'July 2023 – May 2024',
        title: 'Booking Executive',
        subtitle: 'Kabra Express Logistics Pvt. Ltd. | Ahmedabad',
        description: [
            'Built strong supplier relationships and optimized bookings',
            'Maintained accurate records and handled client schedules',
            'Developed strategies and managed client communication'
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
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block">Hi, I&apos;m</span>
            <span className="text-primary">Pratham S</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            A passionate Frontend developer creating modern, responsive, and user-friendly web applications.
          </p>
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/prathamkumar-resume.pdf" target="_blank">Download CV <Download className="ml-2" /></Link>
              </Button>
              <Button asChild size="lg">
                <Link href="https://forms.gle/7axq8mV9Y5T9YhmL8" target="_blank" rel="noopener noreferrer">Inquiry Now</Link>
              </Button>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mt-6">
               <Link href="#" aria-label="LinkedIn" className="bg-primary text-primary-foreground p-3 rounded-full inline-flex items-center justify-center hover:bg-accent transition-colors"><Linkedin /></Link>
               <Link href="#" aria-label="GitHub" className="bg-primary text-primary-foreground p-3 rounded-full inline-flex items-center justify-center hover:bg-accent transition-colors"><Github /></Link>
               <Link href="#" aria-label="Twitter" className="bg-primary text-primary-foreground p-3 rounded-full inline-flex items-center justify-center hover:bg-accent transition-colors"><Twitter /></Link>
               <Link href="#" aria-label="Instagram" className="bg-primary text-primary-foreground p-3 rounded-full inline-flex items-center justify-center hover:bg-accent transition-colors"><Instagram /></Link>
               <Link href="#" aria-label="Facebook" className="bg-primary text-primary-foreground p-3 rounded-full inline-flex items-center justify-center hover:bg-accent transition-colors"><Facebook /></Link>
            </div>
          </div>
        </div>
       
        <div className="md:col-span-1 flex justify-center">
            <Image
              src="/images/hero.jpg"
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
              src="/images/about.jpg"
              alt="About Pratham"
              width={400}
              height={500}
              className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              data-ai-hint="workspace desk"
            />
            </div>
            <div className="md:col-span-2 space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-bold">About Me</h2>
              <p className="text-lg text-foreground/80">
                  Hello! I&apos;m Pratham, a dedicated Frontend Developer with a passion for building beautiful, functional, and user-centric digital experiences. With over 20+ projects completed and 2 years of professional experience, I have a proven track record of delivering high-quality work. All my clients are fully satisfied with the work delivered, reflected in over 10 positive reviews with an average rating of 4.5 stars.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="flex flex-col items-center gap-2">
                      <Briefcase className="w-10 h-10 text-primary" />
                      <p className="text-3xl font-bold"><AnimatedCounter value={20} />+</p>
                      <p className="text-muted-foreground">Projects</p>
                  </div>
                   <div className="flex flex-col items-center gap-2">
                      <Calendar className="w-10 h-10 text-primary" />
                      <p className="text-3xl font-bold"><AnimatedCounter value={2} /></p>
                      <p className="text-muted-foreground">Years Experience</p>
                  </div>
                   <div className="flex flex-col items-center gap-2">
                      <Users className="w-10 h-10 text-primary" />
                      <p className="text-3xl font-bold"><AnimatedCounter value={15} />+</p>
                      <p className="text-muted-foreground">Happy Clients</p>
                  </div>
                   <div className="flex flex-col items-center gap-2">
                      <Star className="w-10 h-10 text-primary" />
                      <p className="text-3xl font-bold">4.5<span className='text-xl'>★</span></p>
                      <p className="text-muted-foreground">Reviews</p>
                  </div>
              </div>
            </div>
        </div>
      </section>

      {/* Skills & Timeline Section Wrapper */}
      <div className="py-20 -mx-4 px-4 sm:mx-0 sm:rounded-2xl dark:bg-card/50">
          <div className="container mx-auto">
            {/* Skills Section */}
            <section id="skills" className="mb-20">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 uppercase">My Skills</h2>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg bg-card/50 dark:bg-slate-800/50 border border-border/50 dark:border-slate-700/50 hover:border-primary hover:-translate-y-1 transition-all duration-300">
                    <div className="text-primary w-12 h-12">{skill.icon}</div>
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
        <ProjectsCarousel projects={projects} />
      </section>

      {/* Blogs Section */}
      <BlogSection />

      {/* Contact Section */}
      <section id="contact" className="py-20">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Let's Talk</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              I'll get back to you within 24 hours.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ContactDetails />
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
          <ContactSocials />
      </section>
    </div>
  )
}
