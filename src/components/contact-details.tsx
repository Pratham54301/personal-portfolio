import { GraduationCap, Languages, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const contactDetailsList = [
  {
    icon: <MapPin className="w-6 h-6 text-accent-green-neon" />,
    label: 'Location',
    value: 'Ahmedabad, India',
  },
  {
    icon: <Mail className="w-6 h-6 text-accent-green-neon" />,
    label: 'Email',
    value: 'prathams54301@gmail.com',
    href: 'mailto:prathams54301@gmail.com',
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-accent-green-neon" />,
    label: 'Education',
    value: 'Silver Oak College of Engineering, Gujarat',
  },
  {
    icon: <Phone className="w-6 h-6 text-accent-green-neon" />,
    label: 'Mobile Number',
    value: '7777967668',
    href: 'tel:7777967668',
  },
  {
    icon: <Languages className="w-6 h-6 text-accent-green-neon" />,
    label: 'Languages',
    value: 'Gujarati, Hindi, English',
  },
];

export function ContactDetails() {
  return (
    <div className="space-y-6">
      <h3 className="font-headline text-2xl font-bold uppercase">CONTACT ME HERE</h3>
      <p className="text-muted-foreground">
      I build stable, scalable, and high-performance software systems with a focus on clean architecture.
With experience across AI, full-stack development, and SaaS platforms, I deliver solutions that last.
Let’s connect and bring your idea to life.
      </p>
      <div className="space-y-4">
        {contactDetailsList.map((detail) => {
          const content = (
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">{detail.icon}</div>
              <div>
                <h4 className="font-semibold text-lg">{detail.label}</h4>
                <p className="text-muted-foreground">{detail.value}</p>
              </div>
            </div>
          );

          if (detail.href) {
            return (
              <a
                href={detail.href}
                key={detail.label}
                className="group block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">{detail.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg">{detail.label}</h4>
                    <p className="text-muted-foreground group-hover:text-accent transition-colors">{detail.value}</p>
                  </div>
                </div>
              </a>
            );
          }

          return <div key={detail.label}>{content}</div>;
        })}
      </div>
    </div>
  );
}
