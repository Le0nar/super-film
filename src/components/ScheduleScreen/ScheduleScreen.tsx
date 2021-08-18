import { FC, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ISchedule } from "../../interfaces/ISchedule";
import { getLongDate } from "../../utils/getLongDate";
import { getScheduleOfDay } from "../../utils/getScheduleOfDay";
import { Header } from "../Header";
import { ScheduleButton } from "./ScheduleButton";
import { ScheduleItem } from "./ScheduleItem";

const Container = styled("div")`
  margin: 0 auto;
  max-width: 348px;
`;
const TitleWrapper = styled("div")`
  border-bottom: 1px solid #e9e9e9;
`;
const Title = styled("h3")`
  font-size: 14px;
  text-align: center;
  color: #333333;
`;

export const ScheduleScreen: FC = () => {
  const [schedule, setSchedule] = useState<ISchedule[]>([]);
  const date = localStorage.getItem("date") ?? "";
  const history = useHistory();
  const currentDate = useMemo(() => new Date(date), [date]);

  useEffect(() => {
    if (date) {
      getScheduleOfDay(currentDate, setSchedule);
    } else {
      history.push("/");
    }
  }, [currentDate, date, history]);

  const [isRolled, setIsRolled] = useState(true);

  const seriesList = isRolled ? schedule.slice(0, 3) : schedule;

  const longDate = getLongDate(currentDate);

  const isScheduleEmpty = !schedule[0];

  if (isScheduleEmpty) return <p>Загрузка...</p>;

  return (
    <Container>
      <Header />
      <TitleWrapper>
        <Title>{longDate}</Title>
      </TitleWrapper>

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
