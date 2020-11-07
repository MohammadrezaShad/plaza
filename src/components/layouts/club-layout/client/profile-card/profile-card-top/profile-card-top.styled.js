import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.dim[3]};
  background-color: ${({ theme }) => theme.palette.surface};
  border-top-right-radius: ${({ theme }) => theme.defaults.borderRadius};
  border-top-left-radius: ${({ theme }) => theme.defaults.borderRadius};
`;

export const StyledContent = styled.div`
  width: 48px;
  margin-left: ${({ theme }) => theme.dim[2]};
`;

export const StlyedDetail = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const StyledTitle = styled.span`
  display: inline-block;
  ${({ theme }) => theme.typography.headline1};
  color: ${({ theme }) => theme.palette.onSurface};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  ${({ theme }) => theme.breakPoints.desktop} {
    ${({ theme }) => theme.typography.headline2};
  }
`;

export const StyledContainer = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const StlyedLevel = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: auto;
`;

export const StyledLevelText = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.subtitle};
  ${({ theme }) => theme.typography.bodyMdNormal};
  white-space: nowrap;
`;

export const StyledLevelValue = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 4px;
  color: ${({ theme, userLevel }) => theme.getUserLevelColor(userLevel)};
  ${({ theme }) => theme.typography.bodyMdBold};
`;

export const StyledButtonWrap = styled.div`
  display: ${({ $display }) => ($display ? "none" : "block")};
  margin-right:${({theme})=>theme.dim[1]};
  ${({ theme }) => theme.breakPoints.desktop} {
    display: ${({ $display }) => ($display ? "block" : "none")};
  }
`;
