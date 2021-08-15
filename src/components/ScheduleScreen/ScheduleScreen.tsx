import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ISchedule } from "../../interfaces/ISchedule";
import { selectSchedule } from "../../store/selectors";
import { ScheduleButton } from "./ScheduleButton";
import { ScheduleItem } from "./ScheduleItem";

export const ScheduleScreen: FC = () => {
  const schedule: ISchedule[] = useSelector(selectSchedule);
  const [isRolled, setIsRolled] = useState(true);

  const seriesList = isRolled ? schedule.slice(0, 3) : schedule;

  return (
    <div>
      <div>
        ScheduleScreen
        {seriesList.map((element) => (
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

      <ScheduleButton
        isRolled={isRolled}
        listLength={schedule.length}
        setIsRolled={setIsRolled}
      />
    </div>
  );
};
