import styled from "styled-components";

export const StyledWrapper = styled.footer`
  padding: ${({ theme }) => theme.defaults.screenSideDim};
`;

export const StyledContent = styled.div`
  padding: ${({ theme }) => theme.dim[3]} 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.strokeVariant};
  }
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;
