import styled from "styled-components";

export const StyledWrapper = styled.ul`
  padding-top: ${({ theme }) => theme.dim[3]};
  margin-top: ${({ theme }) => theme.dim[3]};
  border-top: 1px solid ${({ theme }) => theme.palette.stroke};
`;
