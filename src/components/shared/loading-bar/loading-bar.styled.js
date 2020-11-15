import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  overflow: hidden;
  opacity: ${({ loaded, loading,reset }) => (loaded && loading === 100 && !reset ? 0 : 1)};
  visibility: ${({ loaded, loading,reset }) => (loaded && loading === 100 && !reset ? "hidden" : "visable")};
  transition: ${({ loaded }) => (loaded ? ".2s opacity .5s,0s visibility .5s;" : "0 opacity 0s,0 visibility 0;")};
  background-color: ${({ theme }) => theme.palette.stroke};
  z-index: 200;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: ${({ loading, reset, loaded }) => (!loaded && loading === 100 && reset ? 0 : `${loading}%`)};
    transition: ${({ loading, reset, loaded }) => (loading === 100 && loaded ? ".2s width" : !loaded && loading === 100 && reset ? "0s width" : ".1s width")};
    top: 0;
    bottom: 0;
    height: 5px;
    background-color: ${({ theme }) => theme.palette.primary};
  }
`;
