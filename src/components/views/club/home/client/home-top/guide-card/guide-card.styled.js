import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 0 0 31.5%;
  overflow:hidden;
  margin-right: ${({ theme }) => theme.dim[4]};
`;

export const StyledNumber = styled.span`
  display:inline-block;
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.primary};
  ${({theme})=>theme.typography.bodyMdBold};
  margin-left: 5px;
`;
