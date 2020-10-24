import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.dim[3]};
  background-color:${({theme})=>theme.palette.surface};
  max-height:102px;
`;

export const StlyedDetail = styled.div`
width:70%;
`;

export const StyledTitle = styled.span`
  display: inline-block;
  ${({ theme }) => theme.typography.headline1};
  color: ${({ theme }) => theme.palette.onSurface};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
`;

export const StyledContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

export const StlyedLevel = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.dim[1]};
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
  align-items: center;
  margin-right: ${({ theme }) => theme.dim[1]};
  color: ${({ theme, userLevel }) => theme.getUserLevelColor(userLevel)};
  ${({ theme }) => theme.typography.bodyMdBold};
`;
