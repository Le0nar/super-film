import { Image } from "./ISchedule";

export interface IScheduleItem {
  name: string;
  season: number;
  number?: number | null;
  image?: string
  originalImage?: string
}
