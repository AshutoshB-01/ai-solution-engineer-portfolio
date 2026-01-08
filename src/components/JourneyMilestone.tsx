import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Briefcase, Award, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JourneyMilestoneProps {
  year: string;
  title: string;
  description: string;
  type: 'education' | 'work' | 'achievement';
  location?: string;
  documentLink?: string;
  isLeft?: boolean;
  delay?: number;
}

const iconMap = {
  education: GraduationCap,
  work: Briefcase,
  achievement: Award,
};

export function JourneyMilestone({
  year,
  title,
  description,
  type,
  location,
  documentLink,
  isLeft = false,
  delay = 0,
}: JourneyMilestoneProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const Icon = iconMap[type];

  return (
    <div
      ref={ref}
      className={`relative flex items-center ${isLeft ? 'flex-row-reverse' : ''} ${
        isVisible ? (isLeft ? 'animate-slide-in-right' : 'animate-slide-in-left') : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Road marker */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <div className="w-12 h-12 rounded-full gradient-purple flex items-center justify-center shadow-lg glow-primary">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>

      {/* Content card */}
      <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8'}`}>
        <div className="glass-card rounded-xl p-5 hover-lift">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-3">
            {year}
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          
          {location && (
            <div className={`flex items-center gap-1 text-xs text-muted-foreground mb-3 ${isLeft ? 'justify-end' : ''}`}>
              <MapPin className="h-3 w-3" />
              {location}
            </div>
          )}

          {documentLink && (
            <Button variant="outline" size="sm" asChild>
              <a href={documentLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                View Document <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Empty space */}
      <div className="w-5/12" />
    </div>
  );
}
