import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  opacity: ${({ showSearch }) => (showSearch ? 1 : 0)};
  visibility: ${({ showSearch }) => (showSearch ? "visible" : "hidden")};
  transition: ${({ showSearch }) => (showSearch ? "visibility 0s,opacity .3s" : "0s visibility .3s,opacity .3s")};
`;

export const StyledLayout = styled.div`
  height:100%;
  overflow:scroll;
  background: ${({ theme }) => theme.palette.back};
`;

export const StlyedContent = styled.div`
  padding: ${({ theme }) => theme.dim[2]};
`;
