import { FC } from "react";
import { IScheduleButton } from "../../interfaces/IScheduleButton";

export const ScheduleButton: FC<IScheduleButton> = ({
  isRolled,
  listLength,
  setIsRolled,
}) => {
  const additionalQuantity = listLength - 3;
  const content = isRolled
    ? `Еще ${additionalQuantity} сериал `
    : "Показать основные ";
  return <div onClick={() => setIsRolled(!isRolled)}>{content}</div>;
};
