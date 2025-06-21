import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Atom, Code, Palette } from 'lucide-react';
import type { ReactNode } from 'react';
import type { BlogCategory } from '@/data/blog-data';

type BlogCardProps = {
  category: BlogCategory;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  authorName: string;
  authorImg: string;
};

const categoryStyles: Record<BlogCategory, { className: string; icon: ReactNode }> = {
  React: {
    className: 'text-accent',
    icon: <Atom className="h-6 w-6 text-accent" />,
  },
  CSS: {
    className: 'text-css-pink',
    icon: <Palette className="h-6 w-6 text-css-pink" />,
  },
  Frontend: {
    className: 'text-frontend-blue',
    icon: <Code className="h-6 w-6 text-frontend-blue" />,
  },
};

export function BlogCard({ category, title, date, summary, authorName, authorImg, tags }: BlogCardProps) {
  const style = categoryStyles[category];

  return (
    <Card className="flex h-full min-w-[350px] max-w-[350px] flex-col justify-between rounded-xl border-2 border-transparent bg-card transition-all hover:border-primary">
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{date}</span>
          {style.icon}
        </div>
        <h3 className={cn('pt-4 text-xl font-bold', style.className)}>{title}</h3>
      </CardHeader>
      <CardContent className="flex flex-grow flex-col justify-between">
        <p className="text-muted-foreground">{summary}</p>
        <div className="mt-4">
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={authorImg} alt={authorName} data-ai-hint="person portrait" />
              <AvatarFallback>{authorName.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="font-semibold">{authorName}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
