import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index:${({ theme }) => theme.zIndex.filters};
  opacity: ${({ showFilters }) => (showFilters ? 1 : 0)};
  visibility: ${({ showFilters }) => (showFilters ? "visible" : "hidden")};
  transition: ${({ showFilters }) => (showFilters ?
        "visibility 0s,opacity .3s" : "0s visibility .3s,opacity .3s")};
`;

export const StyledLayout = styled.div`
 height:100%;
  overflow:scroll;
  background: ${({ theme }) => theme.palette.back};
`;

export const StlyedContent = styled.div`
  padding:0 ${({ theme }) => theme.dim[2]};
`;


export const StyledHead = styled.div`
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding:${({ theme }) => theme.dim[2]};
 border-bottom:1px solid ${({theme})=>theme.palette.stroke};
`

export const StyledHeadText = styled.span`
display:inline-flex;
color:${({ theme }) => theme.palette.onSurface};
${({ theme }) => theme.typography.bodyLgBold};
`

export const StyledIcon = styled.span`
color:${({ theme }) => theme.palette.onSurface};
`
