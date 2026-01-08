import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Trophy, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AchievementCardProps {
  title: string;
  description: string;
  date?: string;
  certificateLink?: string;
  blogLink?: string;
  delay?: number;
}

export function AchievementCard({
  title,
  description,
  date,
  certificateLink,
  blogLink,
  delay = 0,
}: AchievementCardProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`glass-card rounded-xl p-6 hover-lift ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center mb-4">
        <Trophy className="h-6 w-6 text-primary-foreground" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      {date && (
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
          <Calendar className="h-3 w-3" />
          {date}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-2 flex-wrap">
        {certificateLink && (
          <Button variant="outline" size="sm" asChild>
            <a href={certificateLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
              Certificate <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        )}
        {blogLink && (
          <Button variant="ghost" size="sm" asChild>
            <a href={blogLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
              Read More <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
