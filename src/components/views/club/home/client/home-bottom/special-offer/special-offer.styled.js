import styled from 'styled-components';


export const StyledWrapper=styled.ul`
  display:flex;
  margin: 0 -${({theme})=>theme.dim[2]};
`