import { FC, useState } from "react";
import styled from "styled-components";

import { IScheduleItem } from "../../interfaces/IScheduleItem";
import { ImagePopup } from "../ImagePopup";

const Box = styled("div")`
  display: flex;
  width: 80%;
  margin: 25px auto;
`;
const StyledImage = styled("img")`
  height: 90px;
`;
const BoxInfo = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 16px;
`;
const BoxInfoTitle = styled("div")`
  display: flex;
  flex-direction: column;
`;
const BoxInfoSeries = styled("div")`
  display: flex;
  background-color: #f5f5f5;
  padding: 8px 6px;
  border-radius: 5px;
`;

const Title = styled("span")`
  font-size: 14px;
  color: #333333;
`;
const GreyText = styled("span")`
  font-size: 12px;
  color: #b4b4b4;
`;

const EpisodeText = styled(GreyText)`
  padding-left: 8px;
`;

export const ScheduleItem: FC<IScheduleItem> = ({
  name,
  season,
  number,
  image,
  originalImage = "",
  airdate,
}) => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const year = airdate.slice(0, 4);

  const openPopup = () => {
    setIsPopupActive(true);
  };

  return (
    <>
      <Box>
        <StyledImage src={image} alt={name} onClick={openPopup} />
        <BoxInfo>
          <BoxInfoTitle>
            <Title>{name}</Title>
            <GreyText>{year}</GreyText>
          </BoxInfoTitle>
          <BoxInfoSeries>
            <GreyText>Сезон: {season}</GreyText>
            <EpisodeText>Эпизод: {number}</EpisodeText>
          </BoxInfoSeries>
        </BoxInfo>
      </Box>
      {isPopupActive && (
        <ImagePopup
          imageSrc={originalImage}
          closePopup={() => setIsPopupActive(false)}
        />
      )}
    </>
  );
};
