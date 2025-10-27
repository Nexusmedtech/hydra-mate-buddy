import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

const quotes = [
  "Small sips. Big energy. Keep going 💙",
  "Stay hydrated, stay radiant ✨",
  "Water is the elixir of life 💧",
  "Your body deserves hydration 🌊",
  "Drink water, feel amazing 🌸",
  "Hydration = Glow from within ✨",
  "Keep your flow, drink H2O 💦",
  "Wellness starts with water 💙",
  "Sip by sip, you're doing great! 🌊",
  "Water: nature's energy drink 💧",
];

export const MotivationalQuote = () => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="glass-card rounded-2xl p-6 text-center shadow-md">
      <Sparkles className="w-8 h-8 mx-auto mb-3 text-accent" />
      <p className="text-lg font-medium text-foreground">{quote}</p>
    </div>
  );
};
