import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.ul`
  flex-shrink: 0;
  flex-basis: 47.7%;
   ${({theme})=>theme.breakPoints.mobileSm}{
    &:first-child{
      margin-left:0;
      flex-basis: 100%;
      margin-bottom:${({ theme }) => theme.dim[2]};
    }
  } 
  &:first-child {
    margin-left: ${({ theme }) => theme.dim[2]};
  }
`;

export const StyledItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.dim[1]};
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  white-space: nowrap;
  text-decoration: none;
  ${({ theme }) => theme.typography.bodySmNormal};
  color: ${({ theme }) => theme.palette.onSurface};
`;
