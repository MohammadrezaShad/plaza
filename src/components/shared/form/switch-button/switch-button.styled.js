import styled from "styled-components";

export const StyledWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 24px;
  border-radius: 12px;
`;

export const StyledLayout = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme})=>theme.palette.stroke};
  transition: 0.4s;
  border-radius: 12px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 0;
    margin:0 3px;
    bottom: 50%;
    transform:translateY(50%);
    background-color: ${({theme})=>theme.palette.back};
    transition: 0.3s all;
    border-radius: 50%;
    box-shadow: 0 1px 3px 0px rgba(0,0,0,0.16);

  }

  &:after {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 0;
    margin:0 6px;
    bottom: 50%;
    transform:translateY(50%);
    background-color: ${({theme})=>theme.palette.strokeVariant};
    transition: 0.3s all;
    border-radius: 50%;
  }
`;

export const StyledCheckBox = styled.input`
  visibility: hidden;
  opacity: 0;
  width: 0;
  height: 0;
  &:checked{
    & + ${StyledLayout}{
          background-color:${({theme})=>theme.palette.secondary};
          &:before,&:after{
            left:21px;
          }
      }
  }
`;
