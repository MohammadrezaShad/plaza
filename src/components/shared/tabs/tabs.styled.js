import styled from "styled-components";

export const StyledWrapper = styled.ul`
  display: flex;
  direction: rtl;
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
`;
