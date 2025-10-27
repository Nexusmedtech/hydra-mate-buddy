import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Clock } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';

export const ReminderSettings = () => {
  const [remindersEnabled, setRemindersEnabled] = useState(true);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Bell className="w-5 h-5 text-hydrate" />
          Reminders
        </h3>
        <Switch checked={remindersEnabled} onCheckedChange={setRemindersEnabled} />
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-water-light">
          <Clock className="w-5 h-5 text-hydrate" />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Every 2 hours</p>
            <p className="text-xs text-muted-foreground">9:00 AM - 9:00 PM</p>
          </div>
        </div>
        <Button variant="outline" className="w-full" disabled={!remindersEnabled}>
          Customize Schedule
        </Button>
      </div>
    </Card>
  );
};
