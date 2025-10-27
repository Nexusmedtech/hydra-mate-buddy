import { Flame } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface StreakCounterProps {
  streak: number;
}

export const StreakCounter = ({ streak }: StreakCounterProps) => {
  return (
    <Card className="p-6 text-center">
      <Flame className="w-12 h-12 mx-auto mb-3 text-orange-500" fill="currentColor" />
      <div className="text-4xl font-bold text-foreground mb-1">{streak}</div>
      <div className="text-sm text-muted-foreground">Day Streak 🔥</div>
      <p className="text-xs text-muted-foreground mt-2">Keep the momentum going!</p>
    </Card>
  );
};
