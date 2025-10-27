import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Target, Users } from 'lucide-react';

export const ChallengesSection = () => {
  const challenges = [
    {
      icon: Trophy,
      title: '7-Day Hydration Hero',
      description: 'Reach your goal 7 days in a row',
      progress: 4,
      total: 7,
    },
    {
      icon: Target,
      title: 'Weekly Warrior',
      description: 'Drink 14L this week',
      progress: 8.5,
      total: 14,
    },
    {
      icon: Users,
      title: 'Team Challenge',
      description: 'Join your friends in staying hydrated',
      progress: 0,
      total: 1,
    },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Trophy className="w-5 h-5 text-accent" />
        Active Challenges
      </h3>
      <div className="space-y-4">
        {challenges.map((challenge, index) => {
          const Icon = challenge.icon;
          const percentage = (challenge.progress / challenge.total) * 100;
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-water-light">
                    <Icon className="w-5 h-5 text-hydrate" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{challenge.title}</h4>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  </div>
                </div>
              </div>
              <div className="ml-11">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-muted-foreground">
                    {challenge.progress} / {challenge.total}
                  </span>
                  <span className="font-semibold text-hydrate">{Math.round(percentage)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full water-gradient transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Button variant="outline" className="w-full mt-4">
        View All Challenges
      </Button>
    </Card>
  );
};
