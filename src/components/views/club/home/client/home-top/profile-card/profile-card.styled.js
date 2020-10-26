import styled from "styled-components";

export const StyledWrapper = styled.div`
  flex:0 0 25%;
  padding:0 ${({theme})=>theme.dim[2]};
  overflow:hidden;
`;

export const StyledContainer=styled.div`
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  height:100%;
`