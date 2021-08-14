import { FC } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getScheduleOfDay } from "../utils/getScheduleOfDay";

export const MainScreen: FC = () => {
  const history = useHistory();

  const dispatcn = useDispatch();

  const goToSchedule = (date: Date) => {
    dispatcn(getScheduleOfDay(date));

    history.push("/schedule");
  };

  return <Calendar onClickDay={(value) => goToSchedule(value)} />;
};
