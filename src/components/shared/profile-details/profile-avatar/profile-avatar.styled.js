import styled from "styled-components";

export const StyledAvatar = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: ${({ theme,iconSize }) =>iconSize=='32px' ? theme.dim[2]:'12px'};
  margin-left: ${({ theme }) => theme.dim[2]};
  flex-shrink: 0;
  background-color: ${({ theme, level }) => (level ? theme.getUserLevelColor(level) : theme.palette.back)};
  PATH {
    fill: ${({ theme, level }) => (level ? theme.palette.back : theme.palette.onSurface)};
  }
`;

export const StyledIcon = styled.span``;
