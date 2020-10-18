import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.back};
  height: 48px;
  box-shadow: ${({ theme }) => theme.defaults.boxShadowInset};
  padding: ${({ theme }) => theme.dim[2]};
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledBoldText = styled.span`
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyMdBold};
  margin-right: ${({ theme }) => theme.dim[1]};
  margin-left: ${({ theme }) => theme.dim[2]};
`;

export const StyledText = styled.span`
  display:${({ error }) =>error ?  'inline-flex':'none'};
  color: ${({ theme }) => theme.palette.secondary};
  ${({ theme }) => theme.typography.subtitleXsNormal};
`;

export const StyledArrowIcon = styled.span`
  color: ${({ theme }) => theme.palette.disabled};
`;

export const StyledAlertIcon = styled.span`
  color: ${({ theme,error }) =>error ? theme.palette.error:theme.palette.success};
`;
