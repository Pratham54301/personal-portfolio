import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type TimelineItemProps = {
  icon: ReactNode;
  date: string;
  title: string;
  subtitle: string;
  description: string;
};

type TimelineProps = {
  items: TimelineItemProps[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 h-full w-px -translate-x-1/2 bg-border/50"></div>

      {items.map((item, index) => (
        <div
          key={index}
          className="relative mb-8 flex w-full items-start justify-start"
        >
          {/* Dot on the timeline */}
          <div
            className="absolute left-6 top-5 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            {item.icon}
          </div>
          
          <div className="w-full pl-16">
             <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                    <div className="text-sm text-accent-green-neon">{item.date}</div>
                    <CardTitle className="font-headline text-lg text-white">{item.title}</CardTitle>
                    <div className="font-semibold text-gray-300">{item.subtitle}</div>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-400">{item.description}</p>
                </CardContent>
             </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
