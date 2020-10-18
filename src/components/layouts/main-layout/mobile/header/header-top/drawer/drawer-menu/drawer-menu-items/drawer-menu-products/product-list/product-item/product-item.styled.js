import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-right: ${({ theme, subOptions }) => (subOptions ? "0" : theme.dim[2])};
`;

export const StyledText = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme, $show }) => ($show ? theme.palette.primary : theme.palette.onSurface)};
  white-space: nowrap;
`;

export const StyledIcon = styled.div`
  display: inline-flex;
  margin-left: ${({ theme }) => theme.dim[1]};
  transform: ${({ $show }) => ($show ? "rotate(90deg)" : "rotate(0)")};
  color: ${({ theme, $show }) => ($show ? theme.palette.primary : theme.palette.onSurface)};
`;
