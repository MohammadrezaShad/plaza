import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  overflow: hidden;
  opacity: ${({ loaded, loading }) => (loaded && loading === 100 ? 0 : 1)};
  visibility:${({ loaded, loading }) => (loaded && loading === 100 ? 'hidden' : 'visable')};
  transition:${({loaded})=>loaded ? '.2s opacity .3s,0s visibility .5s;':'0 opacity 0,0 visibility 0;'};
  background-color: ${({ theme }) => theme.palette.stroke};
  z-index: 200;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: ${({ loading }) => `${loading}%`};
    transition:${({loading})=>loading===100 ? '.2s width':'.5s width'};
    top: 0;
    bottom: 0;
    height: 5px;
    background-color: ${({ theme }) => theme.palette.primary};
  }
`;
