import styled from "styled-components";

export const StyledWrapper = styled.div``;

export const StyledContent = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  &:first-child {
    margin-bottom: ${({ theme }) => theme.dim[3]};
  }
`;
