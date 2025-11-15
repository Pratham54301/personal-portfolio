import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type TimelineItemProps = {
  icon: ReactNode;
  date: string;
  title: string;
  subtitle: string;
  description: string | string[];
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
             <Card className="card-glass card-glass-hover">
                <CardHeader>
                    <div className="text-sm text-accent-green-neon">{item.date}</div>
                    <CardTitle className="font-headline text-lg">{item.title}</CardTitle>
                    <div className="font-semibold text-muted-foreground">{item.subtitle}</div>
                </CardHeader>
                <CardContent>
                    {Array.isArray(item.description) ? (
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {item.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    )}
                </CardContent>
             </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
