import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.li`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.dim[3]};
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.onSurface};
`;

export const StyledText = styled.span`
  ${({ theme }) => theme.typography.bodyMdNormal};
`;

export const StyledIcon = styled.span`
  margin-left: ${({ theme }) => theme.dim[2]};
`;
