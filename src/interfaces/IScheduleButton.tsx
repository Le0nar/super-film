import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { Image } from "./ISchedule";

export interface IScheduleButton {
  isRolled: boolean;
  listLength: number;
  setIsRolled: Dispatch<SetStateAction<boolean>>;
}
