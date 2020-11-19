import styled from 'styled-components';


export const StyledWrapper=styled.div`
  direction:rtl;
  padding-bottom:${({theme})=>theme.dim[2]};
  border-bottom:1px dashed ${({theme})=>theme.palette.stroke};
`