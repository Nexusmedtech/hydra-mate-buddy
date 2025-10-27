import { Card } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';

interface WeeklyChartProps {
  data: number[];
}

export const WeeklyChart = ({ data }: WeeklyChartProps) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const maxValue = Math.max(...data, 2000);

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="w-5 h-5 text-hydrate" />
        <h3 className="text-lg font-semibold text-foreground">Weekly Progress</h3>
      </div>
      <div className="flex items-end justify-between gap-2 h-40">
        {data.map((value, index) => {
          const height = (value / maxValue) * 100;
          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full relative group">
                <div
                  className="w-full water-gradient rounded-t-lg transition-all duration-500 hover:opacity-80 cursor-pointer"
                  style={{ height: `${height}%` }}
                />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-popover px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {value}ml
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{days[index]}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
