import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-top: ${({ theme }) => theme.dim[4]};
`;

export const StyledTitle = styled.span` 
  display:inline-block;
  ${({theme})=>theme.typography.headline2}
  color: ${({ theme }) => theme.palette.onSurface};
  margin-bottom:${({theme})=>theme.dim[2]};
`;
