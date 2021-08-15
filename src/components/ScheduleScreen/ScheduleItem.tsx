import { FC } from "react";

import { IScheduleItem } from "../../interfaces/IScheduleItem";

export const ScheduleItem: FC<IScheduleItem> = ({
  name,
  season,
  number,
  image,
  originalImage,
  airdate,
}) => {
  const year = airdate.slice(0, 4);
  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <div>
          <p>{name}</p>
          <p>{year}</p>
        </div>
        <div>
          <p>Сезон: {season}</p>
          <p>Эпизод: {number}</p>
        </div>
      </div>
    </div>
  );
};
