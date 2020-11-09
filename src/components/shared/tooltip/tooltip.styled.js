import styled from "styled-components";

export const StyledTooltip = styled.div`
  position: absolute;
  top: ${({ $top }) => ($top ? $top : 0)};
  left: ${({ $left }) => ($left ? $left : 0)};
  transform: translateX(-50%);
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  background-color: ${({ theme }) => theme.palette.back};
  
  &:after {
    content: "";
    position: absolute;
    bottom: -7px;
    right: 50%;
    transform: translateX(50%);
    width: 0px;
    height: 0px;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid ${({ theme }) => theme.palette.back};
  }
  &:before {
    content: "";
    position: absolute;
    bottom: -8px;
    right: 50%;
    transform: translateX(50%);
    width: 0px;
    height: 0px;
    border-left: 8.5px solid transparent;
    border-right: 8.5px solid transparent;
    border-top: 8px solid ${({ theme }) => theme.palette.stroke};
  }
`;

export const StyledHeader = styled.span`
  display: flex;
  ${({theme})=>theme.typography.headline2};
  padding: ${({ theme }) => theme.dim[1]} ${({ theme }) => theme.dim[2]};
  background-color: ${({ theme }) => theme.palette.surface};
  border-top-right-radius: ${({ theme }) => theme.defaults.borderRadius};
  border-top-left-radius: ${({ theme }) => theme.defaults.borderRadius};
`;
