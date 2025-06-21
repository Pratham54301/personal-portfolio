import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-6 px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pratham S. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <Link href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="GitHub" className="hover:text-accent transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
           <Link href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
