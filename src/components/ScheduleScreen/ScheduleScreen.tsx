import { FC } from "react";
import { useSelector } from "react-redux";
import { ISchedule } from "../../interfaces/ISchedule";
import { selectSchedule } from "../../store/selectors";
import { ScheduleItem } from "./ScheduleItem";

export const ScheduleScreen: FC = () => {
  const schedule: ISchedule[] = useSelector(selectSchedule);

  return (
    <div>
      ScheduleScreen
      {schedule.map((element) => (
        <ScheduleItem
          season={element.season}
          number={element.number}
          name={element.name}
          image={element.show.image?.medium}
          originalImage={element.show.image?.original}
          airdate={element.airdate}
          key={element.id}
        />
      ))}
    </div>
  );
};
