import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export function StatCounter({ value, label, suffix = '', prefix = '' }: StatCounterProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 });
  const count = useAnimatedCounter(value, 2000, 0, isVisible);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text">
        {prefix}{count}{suffix}
      </div>
      <div className="text-muted-foreground mt-2">{label}</div>
    </div>
  );
}
