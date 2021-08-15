import axios from "axios";

import {
  fetchScheduleFailure,
  fetchScheduleSuccess,
} from "../store/schedule/scheduleActions";
import { formatDate } from "./formatDate";

export const getScheduleOfDay = (date: Date) => (dispatch: any) => {
  const formattedDate = formatDate(date);
  const url = `https://api.tvmaze.com/schedule?date=${formattedDate}&country=us`;

  axios
    .get(url)
    .then((res: any) => {
      const schedule = res.data;
      dispatch(fetchScheduleSuccess(schedule));
    })
    .catch((err: any) => {
      const errMessage = err.message;
      dispatch(fetchScheduleFailure(errMessage));
    });
};
