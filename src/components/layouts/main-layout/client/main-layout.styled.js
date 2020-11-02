import styled from "styled-components";

export const StyledWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  direction: ${({ theme }) => theme.defaults.direction};
`;

export const StyledContainer = styled.main`
  display: flex;
  flex-flow: column;
  flex: 1;
`;
