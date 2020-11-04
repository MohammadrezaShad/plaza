import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;
export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.palette.surface};
  margin-left: ${({ theme }) => theme.dim[2]};
`;

export const StyledText = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyLgBold};
  color: ${({ theme }) => theme.palette.onSurface};
`;

export const StyledSubText = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.subtitle};
`;

export const StyledTotal = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.buttonXsNormal};
  margin-top: 4px;
`;

export const StyledCurrent = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.headline1};
  color: ${({ theme }) => theme.palette.primary};
  margin-right:4px;
`;
