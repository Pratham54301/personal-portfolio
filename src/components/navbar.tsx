'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import Logoimage from '@/public/logo.png'

const navLinks = [
  { href: '/#home', label: 'Home', sectionId: 'home' },
  { href: '/#about', label: 'About', sectionId: 'about' },
  { href: '/#skills', label: 'Skills', sectionId: 'skills' },
  { href: '/#timeline', label: 'Journey', sectionId: 'timeline' },
  { href: '/#projects', label: 'Projects', sectionId: 'projects' },
  { href: '/#blogs', label: 'Blogs', sectionId: 'blogs' },
  { href: '/#contact', label: 'Contact', sectionId: 'contact' },
];

function Logo() {
    return (
        <Image src="{Logoimage}" alt="Logo" width={40} height={40} className="text-primary" />
    )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Trigger when the section is in the middle of the viewport
      }
    );

    const sections = navLinks.map(link => document.getElementById(link.sectionId)).filter(Boolean);
    sections.forEach(section => observer.observe(section!));

    return () => {
      sections.forEach(section => observer.unobserve(section!));
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // If not on the homepage, default to the page's path.
  const currentPath = pathname === '/' ? `#${activeSection}` : pathname;

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled || isMenuOpen ? 'py-2 bg-background/80 backdrop-blur-lg shadow-md' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/#home">
           <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label, sectionId }) => (
            <Link key={href} href={href} className={cn(
                "font-medium transition-colors hover:text-accent",
                activeSection === sectionId && pathname === '/' ? 'text-accent' : 'text-foreground/60'
              )}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ThemeToggle />
        </div> 
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button onClick={toggleMenu} variant="ghost" size="icon">
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-background/95 backdrop-blur-lg">
                <nav className="container mx-auto flex flex-col items-center gap-4 py-4 px-4">
                    {navLinks.map(({ href, label, sectionId }) => (
                    <Link key={href} href={href} onClick={() => setIsMenuOpen(false)} className={cn(
                        "w-full text-center font-medium text-lg py-2 transition-colors hover:text-accent rounded-md",
                        activeSection === sectionId ? 'text-accent bg-accent/10' : 'text-foreground/80'
                        )}>
                        {label}
                    </Link>
                    ))}
                </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
