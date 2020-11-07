import styled from "styled-components";

export const StyledTooltip = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: ${({ $top }) => ($top ? $top : 0)};
  left: ${({ $left }) => ($left ? $left : 0)};
  transform: translateX(-50%);
  padding: ${({ theme }) => theme.dim[1]} ${({ theme }) => theme.dim[2]};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
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

