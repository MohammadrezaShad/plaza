import styled from "styled-components";
import { Link } from "react-router-dom";

const backgrounColor = (type, theme) => {
  switch (type) {
    case "plazaPlus":
      return theme.palette.primary;
    case "plazaMag":
      return theme.palette.secondary;
    case "brands":
      return theme.palette.subtitle;
    case "question":
      return theme.palette.success;
    default:
      return theme.palette.back;
  }
};

export const StyledItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export const StyledSpot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: ${({ theme }) => theme.dim[2]};
  border-radius: 50%;
  background: ${({ type, theme }) => backgrounColor(type, theme)};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyMdNormal};
`;
