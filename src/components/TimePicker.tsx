
import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface TimePickerProps {
  value: string;
  onChange: (time: string) => void;
}

const TimePicker = ({ value, onChange }: TimePickerProps) => {
  const [hours, minutes] = value.split(':').map(Number);

  const updateTime = (newHours: number, newMinutes: number) => {
    const formattedHours = newHours.toString().padStart(2, '0');
    const formattedMinutes = newMinutes.toString().padStart(2, '0');
    onChange(`${formattedHours}:${formattedMinutes}`);
  };

  const incrementHours = () => {
    const newHours = hours === 23 ? 0 : hours + 1;
    updateTime(newHours, minutes);
  };

  const decrementHours = () => {
    const newHours = hours === 0 ? 23 : hours - 1;
    updateTime(newHours, minutes);
  };

  const incrementMinutes = () => {
    const newMinutes = minutes === 59 ? 0 : minutes + 1;
    updateTime(hours, newMinutes);
  };

  const decrementMinutes = () => {
    const newMinutes = minutes === 0 ? 59 : minutes - 1;
    updateTime(hours, newMinutes);
  };

  return (
    <div className="flex items-center justify-center gap-4 p-4 bg-card rounded-xl border border-border">
      {/* Hours */}
      <div className="flex flex-col items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={incrementHours}
          className="h-8 w-8 p-0"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
        <div className="text-2xl font-bold text-center min-w-[3rem] py-2 px-3 bg-accent rounded-lg">
          {hours.toString().padStart(2, '0')}
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={decrementHours}
          className="h-8 w-8 p-0"
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
        <span className="text-xs text-muted-foreground">Hours</span>
      </div>

      {/* Separator */}
      <div className="text-2xl font-bold text-muted-foreground">:</div>

      {/* Minutes */}
      <div className="flex flex-col items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={incrementMinutes}
          className="h-8 w-8 p-0"
        >
          <ChevronUp className="h-4 w-4" />
        </Button>
        <div className="text-2xl font-bold text-center min-w-[3rem] py-2 px-3 bg-accent rounded-lg">
          {minutes.toString().padStart(2, '0')}
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={decrementMinutes}
          className="h-8 w-8 p-0"
        >
          <ChevronDown className="h-4 w-4" />
        </Button>
        <span className="text-xs text-muted-foreground">Minutes</span>
      </div>
    </div>
  );
};

export default TimePicker;
