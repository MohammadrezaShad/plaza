import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 0 0 25%;
  padding:0 ${({theme})=>theme.dim[2]};
  overflow:hidden;
`;

export const StyledNumber = styled.span`
  display:inline-block;
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.primary};
  ${({theme})=>theme.typography.bodyMdBold};
  margin-left: 5px;
`;
