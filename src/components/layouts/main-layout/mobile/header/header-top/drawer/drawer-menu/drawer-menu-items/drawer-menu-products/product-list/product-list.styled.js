import styled from "styled-components";


export const StyledContainer=styled.div`
   max-height: ${({ $show, root }) => ($show ? "1000px" : root ? "1000px" : "0")};
  overflow:hidden;
  margin-bottom: ${({ $show, root, theme }) => root ||!$show ? 0:`-${theme.dim[1]}`}; 
  transition:${({$show })=>$show ? ' max-height 1s ease-in-out,.1s margin-bottom .2s':'max-height 0.5s cubic-bezier(0, 1, 0, 1),.1s margin-bottom .1s'} ;
`

export const StyledListWrapper = styled.ul`
  margin-top: ${({ $show, root, theme }) => (root ? 0 :theme.dim[1])};
  background-color: ${({ theme, depth }) => (!depth ? theme.palette.back : depth == 1 ? theme.palette.surface : theme.palette.whisper)};
  padding: ${({ theme,root }) =>root ? 0: theme.dim[2]};
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.dim[1]};
  }
`;
