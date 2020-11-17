import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin: 20px;
`;

export const StyledText = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.subtitleXsNormal};
`;
export const StyledTextWrap = styled.span`
  display: inline-flex;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  direction: rtl;
  &:first-child {
    margin-bottom: ${({ theme }) => theme.dim[2]};
  }
  &:last-child {
    margin-top: ${({ theme }) => theme.dim[2]};
    justify-content: space-between;
    ${StyledTextWrap} {
      &:nth-child(1) {
        flex: 0 0 25%;
      }
      &:nth-child(2) {
        flex: 0 0 25%;
        ${StyledText} {
          transform: translateX(50%);
        }
      }
      &:nth-child(3) {
        flex: 1;
        ${StyledText} {
          transform: translateX(50%);
        }
      }
      &:nth-child(4) {
      }
    }
  }
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyLgBold};
  margin-left: auto;
`;

export const StyledProgress = styled.div``;

export const StyledStop = styled.span`
  display: inline-flex;
  justify-content: flex-end;
`;

export const StyledStopLayout = styled.span`
  position: relative;
  top: -2px;
  display: inline-block;
  width: 3px;
  height: 8px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const StyledLayout = styled.div`
  position: relative;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: ${({ theme }) => theme.palette.strokeVariant};
  height: 5px;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: ${({ progress }) => (progress === 100 ? 0 : "5px")};
    height: 5px;
    width: ${({ progress }) => `${progress}%`};
    right: 0;
    background-color: ${({ theme }) => theme.palette.secondary};
  }
`;

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  ${StyledStop} {
    &:nth-child(1) {
      flex: 0 0 25%;
      ${StyledStopLayout} {
        border-top-right-radius: 8px;
        background-color: ${({ theme, progress }) => (progress >= 1 ? theme.palette.secondary : theme.palette.strokeVariant)};
      }
    }
    &:nth-child(2) {
      flex: 0 0 25%;
      ${StyledStopLayout} {
        right: -3px;
        background-color: ${({ theme, progress }) => (progress >= 25 ? theme.palette.secondary : theme.palette.strokeVariant)};
      }
    }
    &:nth-child(3) {
      flex: 1;
      ${StyledStopLayout} {
        right: -3px;
        background-color: ${({ theme, progress }) => (progress >= 50 ? theme.palette.secondary : theme.palette.strokeVariant)};
      }
    }
    &:nth-child(4) {
      ${StyledStopLayout} {
        border-top-left-radius: 8px;
        background-color: ${({ theme, progress }) => (progress === 100 ? theme.palette.secondary : theme.palette.strokeVariant)};
      }
    }
  }
`;
