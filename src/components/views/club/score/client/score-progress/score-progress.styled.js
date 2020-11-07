import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.dim[3]} ${({ theme }) => theme.dim[4]};
  border: 1px solid ${({ theme }) => theme.palette.stroke};
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
  background-color: transparent;
  flex-flow: row-reverse;
  position: relative;
  margin-top: ${({ theme }) => theme.dim[3]};
  margin-bottom: ${({ theme }) => theme.dim[6]};
  background-image: ${({ theme }) => `linear-gradient(to right, ${theme.palette.surface} 85.3%,${theme.palette.stroke} 85.4%,${theme.palette.stroke} 92.3%,${theme.palette.disabled} 92.4%,${theme.palette.disabled} 100%)`};
  &:after {
    content: "";
    position: absolute;
    border-radius: 5px;
    height: 10px;
    left: 0;
    width: ${({ progress }) => `${progress * 100}%`};
    background-color: ${({ theme, progress }) => {
      if (progress * 100 >= 85.4 && progress * 100 < 92.4) {
        return theme.palette.goldenUser;
      } else if (progress * 100 >= 92.4) {
        return theme.palette.diamondUser;
      } else {
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
  background-color: ${({ theme }) => theme.palette.stroke};
  position: relative;
`;

export const StyledProgressGoldLevel = styled.div`
  flex: 1;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.disabled};
  position: relative;
`;

export const StyledProgressDiamondLevel = styled.div`
  flex: 0;
  position: relative;
`;

export const StyledTooltipContent = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyMdNormal};
  line-height: 1;
`;
