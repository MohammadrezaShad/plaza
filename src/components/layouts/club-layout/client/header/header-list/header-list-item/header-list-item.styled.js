import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.li`
  &:not(:first-child) {
    margin-right: ${({ theme }) => theme.dim[3]};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color:${({theme})=>theme.palette.onSurface};
  ${({theme})=>theme.typography.bodyMdNormal};
`;
