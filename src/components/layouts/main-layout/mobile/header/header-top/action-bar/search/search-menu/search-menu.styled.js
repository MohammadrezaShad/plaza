import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  right:${({showSearch})=>showSearch ? 0:'-998px'};
  top: 0;
  bottom: 0;
  width: 100%;
  transition:${({showSearch})=>showSearch ? '0.01s right':'0.01s right .5s'}  ;
  background: transparent;
`;

export const StyledLayout = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: auto;
  transform:${({showSearch})=>showSearch ? 'translate(0, 0)':'translate(100%, 0)'};
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  background: ${({ theme }) => theme.palette.back};
`;

export const StlyedContent=styled.div`
  padding:${({theme})=>theme.dim[2]};
`