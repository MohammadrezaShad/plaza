import styled from "styled-components";

export const StyledContainer=styled.div`
  margin-top: ${({ theme }) => theme.dim[3]};

`

export const StyledWrapper = styled.div`
  padding:${({theme})=>theme.dim[4]};
`;

export const StyledTitle = styled.span` 
  display:block;
  ${({theme})=>theme.typography.headline2}
  color: ${({ theme }) => theme.palette.onSurface};
  padding-bottom:${({theme})=>theme.dim[2]};
  margin-bottom:${({theme})=>theme.dim[2]};
  border-bottom:1px solid ${({theme})=>theme.palette.strokeVariant};
  margin-right:${({theme})=>theme.dim[3]};
  margin-left:${({theme})=>theme.dim[3]};

`;
