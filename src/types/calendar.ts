
export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  endTime?: string;
  club: string;
  type: "Tech" | "Cultural" | "Workshop" | "Wellness" | "Business";
  location: string;
  organizer: string;
  isRSVPd: boolean;
  attendeeCount: number;
  maxAttendees?: number;
}

export type ViewMode = "month" | "week";

export type EventType = "Tech" | "Cultural" | "Workshop" | "Wellness" | "Business";
