import styled from "styled-components";

export const StyledWrapper = styled.div`
  margin-top: ${({ theme }) => theme.dim[3]};
  padding:${({theme})=>theme.dim[4]};
  border:1px solid ${({theme})=>theme.palette.stroke};
`;

export const StyledTitle = styled.span` 
  display:block;
  ${({theme})=>theme.typography.headline2}
  color: ${({ theme }) => theme.palette.onSurface};
  padding-bottom:${({theme})=>theme.dim[2]};
  margin-bottom:${({theme})=>theme.dim[2]};
  border-bottom:1px solid ${({theme})=>theme.palette.strokeVariant};
`;
