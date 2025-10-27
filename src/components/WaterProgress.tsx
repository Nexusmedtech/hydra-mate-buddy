import { useState, useEffect } from 'react';
import { Droplet } from 'lucide-react';

interface WaterProgressProps {
  current: number;
  goal: number;
}

export const WaterProgress = ({ current, goal }: WaterProgressProps) => {
  const percentage = Math.min((current / goal) * 100, 100);
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayPercentage(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (displayPercentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg className="transform -rotate-90" width="280" height="280">
        {/* Background circle */}
        <circle
          cx="140"
          cy="140"
          r="120"
          stroke="currentColor"
          strokeWidth="20"
          fill="none"
          className="text-muted"
          opacity="0.2"
        />
        {/* Progress circle */}
        <circle
          cx="140"
          cy="140"
          r="120"
          stroke="url(#gradient)"
          strokeWidth="20"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="text-hydrate" stopColor="currentColor" />
            <stop offset="100%" className="text-accent" stopColor="currentColor" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <Droplet className="w-12 h-12 mb-2 text-hydrate animate-wave" fill="currentColor" />
        <div className="text-5xl font-bold text-foreground">
          {current}<span className="text-2xl text-muted-foreground">ml</span>
        </div>
        <div className="text-sm text-muted-foreground mt-1">of {goal}ml</div>
        <div className="text-lg font-semibold text-hydrate mt-2">{Math.round(percentage)}%</div>
      </div>
    </div>
  );
};
