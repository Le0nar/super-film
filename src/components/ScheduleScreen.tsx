import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { selectSchedule } from "../store/selectors";

export const ScheduleScreen: FC = () => {
  const countries = useSelector(selectSchedule);
  // console.log(countries);

  return <div>ScheduleScreen</div>;
};
