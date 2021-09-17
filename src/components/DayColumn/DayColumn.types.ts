import { DateTime } from "luxon";

export interface DayColumnProps {
  monday: DateTime;
  addTask: (e:any) => void;
  task: string[];
}
