import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { ISchedule } from "../interfaces/ISchedule";
import { formatDate } from "./formatDate";

export const getScheduleOfDay = (date: Date, setSchedule: Dispatch<SetStateAction<ISchedule[]>>) => {
  const formattedDate = formatDate(date);
  const url = `https://api.tvmaze.com/schedule?date=${formattedDate}&country=us`;

  axios
    .get(url)
    .then((res: any) => {
      const schedule = res.data;
      setSchedule(schedule);
    })
    .catch((err: any) => {
      const errMessage = err.message;
      console.error(errMessage);
    });
};
