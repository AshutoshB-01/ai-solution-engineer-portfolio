import { useState } from 'react';
import { ExternalLink, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PasswordModal } from './PasswordModal';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  hasDeepDive?: boolean;
  externalLink?: string;
  delay?: number;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  hasDeepDive = true,
  externalLink,
  delay = 0,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <>
      <div
        ref={ref}
        className={`group glass-card rounded-xl overflow-hidden hover-lift ${
          isVisible ? 'animate-slide-up' : 'opacity-0'
        }`}
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Gradient header */}
        <div className="h-2 gradient-purple" />

        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{subtitle}</p>
          <p className="text-foreground/80 text-sm mb-4 line-clamp-3">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {hasDeepDive && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 group/btn"
              >
                <Lock className={`h-4 w-4 mr-2 transition-colors ${isUnlocked ? 'text-green-500' : ''}`} />
                {isUnlocked ? 'Unlocked' : 'Technical Deep Dive'}
              </Button>
            )}
            {externalLink && (
              <Button
                variant="ghost"
                size="sm"
                asChild
              >
                <a href={externalLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <PasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={() => {
          setIsUnlocked(true);
          setIsModalOpen(false);
        }}
        projectTitle={title}
      />
    </>
  );
}
