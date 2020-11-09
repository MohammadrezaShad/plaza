import styled from "styled-components";

export const StyledWrapper = styled.div`
  flex: 0 0 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.dim[3]} ${({ theme }) => theme.dim[1]};
`;

export const StyledIconWrap = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.surface};
  border-radius: 50%;
  margin-bottom: 16px;
  width: 64px;
  height: 64px;
`;
export const StyledIcon = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
`;
export const StyledTitle = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyLgBold};
  color: ${({ theme }) => theme.palette.onSurface};
  margin-bottom: ${({marginBottom,theme})=>marginBottom===1 ? theme.dim[1]:theme.dim[4]};
  text-align:center;
  max-width:135px;
`;
export const StyledContent = styled.span`
  display: inline-flex;
  flex-flow: column;
  align-items: center;
  min-height:64px;
`;

export const StyledScore = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.body3XLgBold};
  color: ${({ theme }) => theme.palette.primary};
  line-height:1;
`;

export const StyledText = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onSurface};
  text-align:center;
`;
