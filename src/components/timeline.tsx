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
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border"></div>

      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'relative mb-12 flex w-full items-center',
            index % 2 === 0 ? 'justify-start' : 'justify-end'
          )}
        >
          <div
            className={cn(
              'relative w-full max-w-md',
              index % 2 === 0 ? 'pr-8 md:pr-12' : 'pl-8 md:pl-12'
            )}
          >
            {/* Dot on the timeline */}
            <div
              className={cn(
                'absolute top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground',
                index % 2 === 0 ? '-right-4' : '-left-4'
              )}
            >
              {item.icon}
            </div>

            <Card>
              <CardHeader>
                <div className="text-xs text-muted-foreground">{item.date}</div>
                <CardTitle className="font-headline text-lg text-primary">{item.title}</CardTitle>
                <div className="font-semibold">{item.subtitle}</div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
