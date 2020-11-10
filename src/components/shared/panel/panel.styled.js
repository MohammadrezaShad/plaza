import styled from "styled-components";

export const StyledWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
`;
