import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ISchedule } from "../../interfaces/ISchedule";
import { selectSchedule } from "../../store/selectors";
import { Header } from "../Header";
import { ScheduleButton } from "./ScheduleButton";
import { ScheduleItem } from "./ScheduleItem";

const Container = styled("div")`
  margin: 0 auto;
  max-width: 348px;
`;

export const ScheduleScreen: FC = () => {
  const schedule: ISchedule[] = useSelector(selectSchedule);
  const [isRolled, setIsRolled] = useState(true);

  const seriesList = isRolled ? schedule.slice(0, 3) : schedule;

  const date = schedule[0]?.airdate

  return (
    <Container>
      <Header />
      <div>
        <h3>{date}</h3>
      </div>

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

      <ScheduleButton
        isRolled={isRolled}
        listLength={schedule.length}
        setIsRolled={setIsRolled}
      />
    </Container>
  );
};
