import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  overflow: hidden;
  opacity:${({loaded})=>loaded ? 0:1};
  visibility:${({loaded})=>loaded ? 'hidden':'visible'};
  transition:${({loaded})=> loaded ? '.2s opacity,0s visibility':'0s opacity,0s visibility'} ;
  transition-delay: ${({ loaded }) => (loaded ? "1s , 1.2s" : "0s , 0s")};
  background-color: ${({ theme }) => theme.palette.stroke};
  z-index: 200;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: ${({ loading, reset, loaded }) => 
    (reset && !loaded && loading === 100 ? 0 : `${loading}%`)};
    transition: ${({ loading, reset, loaded }) => 
    (reset && !loaded && loading === 100 ? "all 0s" : `all 1s`)};
    top: 0;
    bottom: 0;
    height: 5px;
    background-color: ${({ theme }) => theme.palette.primary};
  }
`;
