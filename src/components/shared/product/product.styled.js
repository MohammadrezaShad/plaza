import styled from "styled-components";
import IconProvider from "../../../providers/icon/icon-provider";
import Button from "../button";

export const StyledWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  & > button {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 0;
    z-index: 10;
    width: 30px;
    background-color: ${({ theme }) => theme.palette.back};
    &:first-child {
      left: auto;
      right: 0;
    }
  }
`;

export const StyledContent = styled.div`
  position: relative;
  transition: all .8s ease 0s;
  left: ${({ $left,itemWidth }) => `${$left*itemWidth}%`};
  right: auto;
  top: auto;
`;

export const StyledContainer = styled.ul`
  display: flex;
`;

export const StyledProducts = styled.div``;

export const StyledIcon = styled(IconProvider)`
  position: absolute;
  top: 0;
`;
