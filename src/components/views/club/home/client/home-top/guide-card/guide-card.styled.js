import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 0 0 31.5%;
  min-width: 0;
  margin-right: ${({ theme }) => theme.dim[4]};
`;

export const StyledNumber = styled.span`
  display: inline-block;
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.primary};
  ${({ theme }) => theme.typography.bodyMdBold};
  margin-left: 5px;
`;

export const StyledContent = styled.div`
  display: ${({ $display }) => ($display ? "none" : "block")};
  margin-top: ${({ theme }) => theme.dim[2]};
  ${({ theme }) => theme.breakPoints.desktop} {
    display: ${({ $display }) => ($display ? "block" : "none")};
  }
`;
