import styled, { css } from "styled-components";
import IconProvider from "../../../providers/icon/icon-provider";
import Button from "../button";


export const StyledBlock = styled.div`
  position: relative;

`

export const StyledHead = styled.div`
  display:flex;
  justify-content:space-between;
  padding-bottom:${({ theme,borderTitle }) =>borderTitle ? theme.dim[2]:'0'};
  border-bottom:${({borderTitle,theme})=>borderTitle ? 
  `1px solid ${theme.palette.strokeVariant}`:'none'};
  margin-right:${({ theme,marginHead}) =>marginHead ? theme.dim[6]:theme.dim[3]};
  margin-left:${({ theme,marginHead }) =>marginHead ? theme.dim[6]:theme.dim[3]};
`

export const StyledTitle = styled.span`
  position:relative;
  display:inline-flex;
  ${({ theme }) => theme.typography.headline2}
  color: ${({ theme }) => theme.palette.onSurface};
  &::before{
    content: "";
    position: absolute;
    right: -8px;
    transform:translateX(100%);
    top: 6px;
    background-color: #F89A01;
    width: 4px;
    height: 16px;
  }
`

export const StyledButtonWrap = styled.div`
  display:inline-flex;
  ${({ buttonTopLeft }) => {
    if (buttonTopLeft) {
      return css`
      & > button {
        &:first-child{
          margin-left:${({ theme }) => theme.dim[2]};
        }
      }
      
      `

    } else {
      return css`
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
      `
    }
  }}

`

export const StyledWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;

`;

export const StyledContent = styled.div`
  position: relative;
  transition: all .8s ease 0s;
  left: ${({ $left, itemWidth }) => `${$left * itemWidth}%`};
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
