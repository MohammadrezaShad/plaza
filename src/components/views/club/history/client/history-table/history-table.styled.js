import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 75%;
  padding:0 ${({theme})=>theme.dim[2]};
`;

export const StyledContent=styled.div``

export const StyledContainer=styled.div`
  display: flex;
  align-items: center;
  justify-content:flex-end;
  margin-top: ${({ theme }) => theme.dim[2]};
`