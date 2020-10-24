import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 0 25.5%;
  padding-right:${({theme})=>theme.dim[4]};
  overflow:hidden;
`;

export const StyledNumber = styled.span`
  display:inline-block;
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.primary};
  ${({theme})=>theme.typography.bodyMdBold};
  margin-left: 5px;
`;
