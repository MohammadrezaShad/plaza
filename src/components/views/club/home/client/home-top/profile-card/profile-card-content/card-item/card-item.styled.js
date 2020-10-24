import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.dim[3]};
  }
`;

export const StyledText = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyMdNormal};
  transition: all 0.3s;
`;

export const StyledIcon = styled.span`
  display: inline-flex;
  margin-left: ${({ theme }) => theme.dim[2]};
  transition: all 0.3s;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.onSurface};
  &:hover {
    ${StyledText},${StyledIcon} {
      color: ${({ theme }) => theme.palette.primary};
    }
  }
`;
