import styled from "styled-components";

export const StyledWrapper = styled.div`
  display:flex;
  margin: 0 ${({ theme }) => theme.dim[4]};
  padding:${({theme})=>theme.dim[2]} 0;
  &:not(:last-child){
      border-bottom:1px solid ${({theme})=>theme.palette.strokeVariant};
  }
`;

export const  StyledContent=styled.div`

`