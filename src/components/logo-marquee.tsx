'use client';

import Image from 'next/image';

const logos = [
  // Placeholder logos - replace with actual client or partner logos
  { src: 'https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg', alt: 'Transistor' },
  { src: 'https://tailwindui.com/img/logos/158x48/reform-logo-white.svg', alt: 'Reform' },
  { src: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg', alt: 'SavvyCal' },
  { src: 'https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg', alt: 'Laravel' },
  { src: 'https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg', alt: 'Tuple' },
  { src: 'https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg', alt: 'Statamic' },
  { src: 'https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg', alt: 'Transistor' },
  { src: 'https://tailwindui.com/img/logos/158x48/reform-logo-white.svg', alt: 'Reform' },
  { src: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg', alt: 'SavvyCal' },
  { src: 'https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg', alt: 'Laravel' },
];

export function LogoMarquee() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative mt-16 w-full overflow-hidden py-8 bg-background/50">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
      <div className="flex animate-marquee-fast hover:pause motion-reduce:animate-none">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="mx-8 flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={158}
              height={48}
              className="h-10 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110"
              unoptimized // Recommended for SVGs or external images that are already optimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
