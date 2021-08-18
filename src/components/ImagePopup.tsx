
import { FC, MouseEvent } from "react";
import styled from "styled-components";

const Overlay = styled("div")`
  margin: auto;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled("img")`
  width: 300px;
`;

interface IProps {
  imageSrc: string;
  closePopup: () => void;
}

export const ImagePopup: FC<IProps> = ({ imageSrc, closePopup }) => {
  const handleClose = (event: MouseEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement;
    const isClickOnOverlay = element.tagName === "DIV";
    if (isClickOnOverlay) closePopup();
  };
  return (
    <Overlay onClick={handleClose}>
      <StyledImage src={imageSrc} alt="big image" />
    </Overlay>
  );
};
