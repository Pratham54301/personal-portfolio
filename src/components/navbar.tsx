'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled ? 'py-2 bg-background/80 backdrop-blur-lg shadow-md' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="font-headline text-2xl font-bold text-primary">
          PS
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className={cn(
                "font-medium transition-colors hover:text-primary",
                pathname === href ? 'text-primary' : 'text-foreground/60'
              )}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        <div className="md:hidden">
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
                    {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} onClick={() => setIsMenuOpen(false)} className={cn(
                        "w-full text-center font-medium text-lg py-2 transition-colors hover:text-primary rounded-md",
                        pathname === href ? 'text-primary bg-primary/10' : 'text-foreground/80'
                        )}>
                        {label}
                    </Link>
                    ))}
                    <div className="mt-2">
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
