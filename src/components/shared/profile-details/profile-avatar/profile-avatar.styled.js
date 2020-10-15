import styled from "styled-components";

export const StyledAvatar = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: ${({ theme }) => theme.dim[2]};
  margin-left: ${({ theme }) => theme.dim[2]};
  flex-shrink: 0;
  background-color: ${({ theme, fillColor }) => (fillColor ? theme.getUserLevelColor(fillColor) : theme.palette.back)};
  PATH {
    fill: ${({ theme, fillColor }) => (fillColor ? theme.palette.back : theme.palette.onSurface)};
  }
`;

export const StyledIcon = styled.span``;
