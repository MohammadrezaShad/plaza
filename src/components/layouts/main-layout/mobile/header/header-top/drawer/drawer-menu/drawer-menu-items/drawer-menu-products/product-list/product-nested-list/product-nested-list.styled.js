import styled from "styled-components";

export const StyledWrapper = styled.li`
  &:not(:last-child) {
    margin-bottom: ${({ theme, $show }) => ($show ? theme.dim[1] : theme.dim[2])};
  }
`;
