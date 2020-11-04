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
