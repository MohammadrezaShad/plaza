import styled from "styled-components";

export const StyledWrapper = styled.span`
  display:inline-flex;
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  justify-content:center;
  align-items:center;
  margin: 0 ${({ theme }) => theme.dim[1]};
  background-color: ${({ theme, currentPage, text }) => (currentPage === text ? theme.palette.primary : theme.palette.back)};
  color: ${({ theme, currentPage, text }) => (currentPage === text ? theme.palette.onPrimary : theme.palette.onSurface)};
  ${({ theme }) => theme.typography.bodyMdNormal};
  width: 41px;
  height: 40px;
  cursor: pointer;
  transition: ${({ currentPage, text }) => (currentPage === text ? "0.3s all" : "0s all")};
`;


export const StyledSeparator=styled.span`
 display:inline-flex;
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  justify-content:center;
  align-items:center;
  margin: 0 ${({ theme }) => theme.dim[1]};
  background-color: ${({ theme, currentPage, text }) => (theme.palette.back)};
  color: ${({ theme, currentPage, text }) => (theme.palette.onSurface)};
  ${({ theme }) => theme.typography.bodyMdNormal};
  height: 40px;
`