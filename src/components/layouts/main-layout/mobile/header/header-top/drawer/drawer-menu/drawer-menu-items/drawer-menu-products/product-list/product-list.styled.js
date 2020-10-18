import styled from "styled-components";

export const StyledListWrapper = styled.ul`
  display: ${({ $show, root }) => ($show ? "block" : root ? "block" : "none")};
  margin-top: ${({ $show, root, theme }) => (root ? 0 : $show ? theme.dim[1] : 0)};
  background-color: ${({ theme, depth }) => (!depth ? theme.palette.back : depth == 1 ? theme.palette.surface : theme.palette.whisper)};
  padding: ${({ theme }) => theme.dim[2]};
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.dim[1]};
  }
`;
