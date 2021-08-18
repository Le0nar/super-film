import { FC } from "react";
import { IScheduleButton } from "../../interfaces/IScheduleButton";
import arrow from "../../images/arrow.png";
import styled from "styled-components";
import { getCorrectDeclension } from "../../utils/getCorrectDeclension";

const Wrapper = styled("div")`
  color: #999999;
  border: 1px solid #999999;
  margin: 16px auto 32px;
  padding: 8px 0px 8px 16px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 185px;
`;
const StyledImg = styled("img")`
  width: 16px;
  padding: 0px 16px;
`;

export const ScheduleButton: FC<IScheduleButton> = ({
  isRolled,
  listLength,
  setIsRolled,
}) => {
  const additionalQuantity = listLength - 3;

  const rightDeclension = getCorrectDeclension(
    additionalQuantity,
    "сериал",
    "сериала",
    "сериалов"
  );

  const content = isRolled
    ? `Еще ${additionalQuantity} ${rightDeclension} `
    : "Показать основные ";

  const arrowImg = (
    <StyledImg
      src={arrow}
      alt="tv"
      style={{ transform: isRolled ? "" : "rotate(0.5turn)" }}
    />
  );

  return (
    <Wrapper onClick={() => setIsRolled(!isRolled)}>
      <span>{content}</span>
      {arrowImg}
    </Wrapper>
  );
};
