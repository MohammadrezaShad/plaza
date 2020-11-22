import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: ${({ theme }) => theme.dim[3]};

`

export const StyledWrapper = styled.div`
  padding:${({ theme }) => theme.dim[4]};
  padding-bottom:${({ theme }) => theme.dim[1]};
`;
