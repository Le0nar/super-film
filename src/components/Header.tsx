import { FC } from "react";
import styled from "styled-components";

const StyledHeader = styled("header")`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333333;
`;
export const Header: FC = () => (
  <StyledHeader>
    <h4>SUPER FILM</h4>
  </StyledHeader>
);
