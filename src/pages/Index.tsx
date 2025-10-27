import { useState, useEffect } from 'react';
import { WaterProgress } from '@/components/WaterProgress';
import { QuickAddButtons } from '@/components/QuickAddButtons';
import { MotivationalQuote } from '@/components/MotivationalQuote';
import { StreakCounter } from '@/components/StreakCounter';
import { WeeklyChart } from '@/components/WeeklyChart';
import { ChallengesSection } from '@/components/ChallengesSection';
import { ReminderSettings } from '@/components/ReminderSettings';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Droplet, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroWater from '@/assets/hero-water.jpg';

const DAILY_GOAL = 2000; // 2000ml = 2L

const Index = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [customAmount, setCustomAmount] = useState('');
  const [streak, setStreak] = useState(4);
  const [weeklyData, setWeeklyData] = useState([1800, 2100, 1900, 2000, 2200, 1700, 1500]);
  const { toast } = useToast();

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('hydramate-data');
    if (saved) {
      const data = JSON.parse(saved);
      setWaterIntake(data.waterIntake || 0);
      setStreak(data.streak || 1);
      setWeeklyData(data.weeklyData || [1800, 2100, 1900, 2000, 2200, 1700, 1500]);
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem(
      'hydramate-data',
      JSON.stringify({ waterIntake, streak, weeklyData })
    );
  }, [waterIntake, streak, weeklyData]);

  const addWater = (amount: number) => {
    const newTotal = waterIntake + amount;
    setWaterIntake(newTotal);

    // Show celebration toast when goal is reached
    if (waterIntake < DAILY_GOAL && newTotal >= DAILY_GOAL) {
      toast({
        title: '🎉 Goal Reached!',
        description: "Amazing work! You've hit your daily hydration goal!",
      });
    } else {
      toast({
        title: '💧 Water Added',
        description: `Added ${amount}ml to your daily intake`,
      });
    }
  };

  const handleCustomAdd = () => {
    const amount = parseInt(customAmount);
    if (amount && amount > 0) {
      addWater(amount);
      setCustomAmount('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroWater})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl water-gradient">
                <Droplet className="w-8 h-8 text-white" fill="white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">HydraMate</h1>
                <p className="text-sm text-muted-foreground">Your hydration companion</p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Progress Section */}
        <section className="flex flex-col items-center gap-6">
          <WaterProgress current={waterIntake} goal={DAILY_GOAL} />
          <MotivationalQuote />
        </section>

        {/* Quick Add Section */}
        <section className="glass-card rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-center text-foreground">Add Water</h2>
          <QuickAddButtons onAdd={addWater} />
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              type="number"
              placeholder="Custom amount (ml)"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleCustomAdd()}
              className="flex-1"
            />
            <Button onClick={handleCustomAdd} variant="outline">
              Add
            </Button>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StreakCounter streak={streak} />
          <div className="lg:col-span-2">
            <WeeklyChart data={weeklyData} />
          </div>
        </div>

        {/* Challenges and Reminders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChallengesSection />
          <ReminderSettings />
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          Stay hydrated, stay healthy 💙
        </p>
      </footer>
    </div>
  );
};

export default Index;
