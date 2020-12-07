import styled from "styled-components";

export const StyledBlock = styled.div`
  padding: ${({ theme }) => theme.dim[4]} 0;
  &:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
  }
`;
