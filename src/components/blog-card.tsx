import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import type { BlogCategory } from '@/data/blog-data';

type BlogCardProps = {
  category: BlogCategory;
  title: string;
  summary: string;
  tags: string[];
};

export function BlogCard({ category, title, summary, tags }: BlogCardProps) {

  return (
    <a href="#" className="block h-full group">
      <Card className="card-glass card-glass-hover flex h-full flex-col justify-between">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
             <Badge variant="secondary">{category}</Badge>
             <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <h3 className={cn('text-xl font-bold')}>{title}</h3>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col justify-between">
          <p className="text-muted-foreground text-sm">{summary}</p>
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
