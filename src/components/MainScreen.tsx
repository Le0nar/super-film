import { FC } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useHistory } from "react-router-dom";
import tv from "../images/tv.png";
import styled from "styled-components";
import { Header } from "./Header";

const Container = styled("div")`
  margin: 0 auto;
  height: 100vh;
  max-width: 348px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
const MainContent = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 30px;
`;

const StyledImage = styled("img")`
  width: 115px;
  padding-bottom: 15px;
`;

export const MainScreen: FC = () => {
  const history = useHistory();

  const goToSchedule = (date: Date) => {
    localStorage.setItem("date", String(date));
    history.push("/schedule");
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <MainContent>
          <StyledImage src={tv} alt="tv" />
          <p>Для получения списка сериалов, пожалуйста, выберите необходимый</p>
        </MainContent>
        <Calendar onClickDay={(value) => goToSchedule(value)} />
      </Wrapper>
    </Container>
  );
};
