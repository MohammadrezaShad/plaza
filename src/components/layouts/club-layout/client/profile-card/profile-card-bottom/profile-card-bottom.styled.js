import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding:0 ${({ theme }) => 
  theme.dim[4]} ${({ theme }) => theme.dim[2]} ${({ theme }) => theme.dim[4]};
`;
