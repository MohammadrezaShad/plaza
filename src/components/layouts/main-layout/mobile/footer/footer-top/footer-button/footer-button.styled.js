import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${({ theme }) => theme.palette.nightRider};
  color: ${({ theme }) => theme.palette.onPrimary};
  padding: ${({ theme }) => theme.dim[2]};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  &:last-child {
    margin-right: ${({ theme }) => theme.dim[2]};
  }
`;

export const StyledText = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodySmNormal};
  ${({ theme }) => theme.breakPoints.mobileSm} {
    ${({ theme }) => theme.typography.subtitleXsNormal};
  }
`;

export const StyledIcon = styled.span`
  margin-left: ${({ theme }) => theme.dim[1]};
  color: ${({ theme, icon }) => (icon === "android" ? theme.palette.atlantis : theme.palette.onPrimary)};
`;
