import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-top: ${({ theme }) => theme.dim[4]};
`;
export const StyledContent = styled.div`
  display: flex;
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.dim[2]};
  }
`;

export const StyledContainer = styled.div`
  display: ${({ $display }) => ($display ? "none" : "block")};
  ${({ theme }) => theme.breakPoints.desktop} {
    display: ${({ $display }) => ($display ? "block" : "none")};
  }
`;