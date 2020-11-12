import styled, { css } from "styled-components";
import IconProvider from "../../../../../../providers/icon/icon-provider";

const backgroundPicker = (level) => {
  if (level === 1) {
    return css`
      background-image: ${({ theme }) => `linear-gradient(to right, ${theme.palette.surface} 85.3%,${theme.palette.stroke} 85.4%,${theme.palette.stroke} 92.3%,${theme.palette.disabled} 92.4%,${theme.palette.disabled} 100%)`};
    `;
  } else if (level === 2) {
    return css`
      background-image: ${({ theme }) => `linear-gradient(to right ,${theme.palette.surface} 85.3%,${theme.palette.surface} 92.3%,${theme.palette.disabled} 92.4%,${theme.palette.disabled} 100%)`};
    `;
  } else {
    return css`
      background-image: ${({ theme }) => `linear-gradient(to right ,${theme.palette.surface} 85.3%,${theme.palette.surface} 92.3%,${theme.palette.surface} 92.4%,${theme.palette.surface} 100%)`};
    `;
  }
};

export const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.dim[3]} ${({ theme }) => theme.dim[4]};
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.headline2};
  margin-bottom: ${({ theme }) => theme.dim[5]};
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
`;

export const StyledProgress = styled.div`
  display: flex;
  height: 10px;
  border-radius: 5px;
  background-color: red;
  flex-flow: row-reverse;
  position: relative;
  margin-top: ${({ theme }) => theme.dim[3]};
  margin-bottom: ${({ theme }) => theme.dim[6]};
  ${({ level }) => backgroundPicker(level)};
  &:after {
    content: "";
    position: absolute;
    border-radius: 5px;
    height: 10px;
    left: 0;
    width: ${({ progress }) => `${progress * 100}%`};
    background-color: ${({ level, theme }) => {
      switch (level) {
        case 1:
          return theme.palette.success;
        case 2:
          return theme.palette.subtitle;
        case 3:
          return theme.palette.primary;
        case 4:
          return theme.palette.diamondUser;
        default:
          return theme.palette.success;
      }
    }};
  }
`;

export const StyledNumber = styled.span`
  position: absolute;
  display: inline-block;
  color: ${({ theme }) => theme.palette.subtitle};
  left: 0;
  transform: translateX(-100%);
  top: -16px;
  ${({ theme }) => theme.typography.subtitleXsNormal};
`;

export const StyledLevel = styled(StyledNumber)`
  display: flex;
  align-items: center;
  top: auto;
  bottom: -24px;
  white-space: nowrap;
`;

export const StyledProgressGreenLevel = styled.div`
  flex: 0 0 85.8%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.surface};
  position: relative;
  ${StyledNumber} {
    transform: translateX(0);
  }
`;

export const StyledProgressSilverLevel = styled.div`
  flex: 0 0 7%;
  border-radius: 5px;
  background-color: ${({ theme, level }) => (level === 1 ? theme.palette.stroke : theme.palette.surface)};
  position: relative;
`;

export const StyledProgressGoldLevel = styled.div`
  flex: 1;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${({ theme, level }) => (level === 2 || level === 1 ? theme.palette.disabled : theme.palette.surface)};
  position: relative;
`;

export const StyledProgressDiamondLevel = styled.div`
  flex: 0;
  position: relative;
`;

export const StyledIcon = styled.span`
  margin-left: ${({ theme }) => theme.dim[3]};
`;
