import styled from "styled-components";

export const StyledWrapper = styled.span`
  display: inline-flex;
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  margin: 0 ${({ theme }) => theme.dim[1]};
  padding: ${({ theme }) => theme.dim[1]} ${({ theme }) => theme.dim[2]};
  background-color: ${({ theme, selectedPage }) => (selectedPage ? theme.palette.primary : theme.palette.back)};
  color: ${({ theme, selectedPage }) => (selectedPage ? theme.palette.onPrimary : theme.palette.onSurface)};
  ${({ theme }) => theme.typography.bodyMdNormal};
  width: 41px;
  height: 40px;
  cursor: pointer;
  transition:${({selectedPage})=> selectedPage ? '0.3s all':'0s all'} ;
`;
