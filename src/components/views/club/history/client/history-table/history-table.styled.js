import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 75%;
  padding: 0 ${({ theme }) => theme.dim[2]};
`;

export const StyledContent = styled.div``;

export const StyledTable=styled.div`
  display:none;
`

export const StyledEmpty=styled.div`
text-align:center;
`

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.dim[2]};
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.headline2}
  color:${({ theme }) => theme.palette.onSurface};
  margin-bottom:${({theme})=>theme.dim[6]};
`;
