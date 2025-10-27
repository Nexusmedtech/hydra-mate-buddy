import { Button } from '@/components/ui/button';
import { Droplet, Waves, Coffee } from 'lucide-react';

interface QuickAddButtonsProps {
  onAdd: (amount: number) => void;
}

export const QuickAddButtons = ({ onAdd }: QuickAddButtonsProps) => {
  const buttons = [
    { amount: 250, icon: Droplet, label: '250ml' },
    { amount: 500, icon: Waves, label: '500ml' },
    { amount: 750, icon: Coffee, label: '750ml' },
  ];

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {buttons.map(({ amount, icon: Icon, label }) => (
        <Button
          key={amount}
          variant="hydrate"
          size="lg"
          onClick={() => onAdd(amount)}
          className="min-w-[120px]"
        >
          <Icon className="w-5 h-5" />
          {label}
        </Button>
      ))}
    </div>
  );
};
