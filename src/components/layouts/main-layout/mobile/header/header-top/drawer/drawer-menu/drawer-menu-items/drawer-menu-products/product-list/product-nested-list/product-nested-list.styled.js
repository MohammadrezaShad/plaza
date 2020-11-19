import styled from "styled-components";

export const StyledWrapper = styled.li`
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.dim[2]};
  }
`;
