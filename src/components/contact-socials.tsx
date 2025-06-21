import { Facebook, Twitter, Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SocialLinkInfo = {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
};

const socials: SocialLinkInfo[] = [
  {
    href: 'https://facebook.com/yourprofile',
    label: 'Facebook',
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    href: 'https://twitter.com/yourprofile',
    label: 'Twitter',
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    href: 'https://github.com/pratham54301',
    label: 'GitHub',
    icon: <Github className="w-5 h-5" />,
  },
  {
    href: 'https://instagram.com/yourprofile',
    label: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    href: 'https://behance.net/yourusername',
    label: 'Behance',
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
        >
            <path d="M22.281 6.141h-6.561c-.551 0-.996.445-.996.996v8.728c0 .551.445.996.996.996h6.561v-2.188h-4.375v-1.875h3.75v-2.188h-3.75V8.328h4.375V6.14zm-9.375 8.953c-2.438 0-4.5-1.828-4.5-4.5s2.062-4.5 4.5-4.5c2.438 0 4.5 1.828 4.5 4.5s-2.062 4.5-4.5 4.5zm0-2.188c1.313 0 2.25-1.125 2.25-2.313s-.938-2.313-2.25-2.313-2.25 1.125-2.25 2.313.938 2.313 2.25 2.313zm-8.25-6.765H0v8.953h4.625c.602 0 1.055-.422 1.055-1.031.023-.65-.48-1.06-1.012-1.06H2.188V8.328h2.367c.563 0 .961-.398.961-.937s-.398-.938-.96-.938z"/>
        </svg>
    ),
    className: 'bg-[#1769FF] text-white hover:bg-opacity-80 hover:scale-110 transform'
  },
  {
    href: 'https://linkedin.com/in/pratham-s',
    label: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    href: 'https://wa.me/yourphonenumber',
    label: 'WhatsApp',
    icon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
        >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.888-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.203 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
    ),
  },
];

export function ContactSocials() {
  return (
    <div className="flex justify-center items-center gap-4 py-8">
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${social.label} profile`}
          className={cn(
            "p-3 rounded-full transition-all duration-300",
            social.className
              ? social.className
              : "bg-primary text-primary-foreground hover:bg-accent"
          )}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
