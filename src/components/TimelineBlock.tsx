import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase } from 'lucide-react';

interface TimelineBlockProps {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
  isLeft?: boolean;
  delay?: number;
}

export function TimelineBlock({
  title,
  company,
  location,
  period,
  points,
  isLeft = false,
  delay = 0,
}: TimelineBlockProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-8 ${isLeft ? 'flex-row-reverse' : ''} ${
        isVisible ? (isLeft ? 'animate-slide-in-right' : 'animate-slide-in-left') : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary z-10" />

      {/* Content */}
      <div className={`w-5/12 ${isLeft ? 'text-right' : ''}`}>
        <div className="glass-card rounded-xl p-6 hover-lift">
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm font-medium">{period}</span>
          </div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-4">
            {company} • {location}
          </p>
          <ul className={`space-y-2 text-sm text-foreground/80 ${isLeft ? 'text-right' : ''}`}>
            {points.slice(0, 4).map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Empty space for other side */}
      <div className="w-5/12" />
    </div>
  );
}
