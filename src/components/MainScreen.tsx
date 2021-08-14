import { FC } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useHistory } from "react-router-dom";

export const MainScreen: FC = () => {
  const history = useHistory();

  const goToSchedule = () => {
    history.push("/schedule");
  };

  return <Calendar onClickDay={goToSchedule} />;
};
