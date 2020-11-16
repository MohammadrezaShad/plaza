import styled, { css } from "styled-components";

const transitionMaker = (index) => {};

export const StyledWrapper = styled.li`
  display:inline-flex;
  position: relative;
  overflow: hidden;
  &:not(:first-child){
    margin-left:4px;
  }
`;

export const StyledIconPrimary = styled.span`
  color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
`;

export const StyledIconEmpty = styled.span`
  cursor: pointer;
`;

export const StyledIconHalf = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary};
`;