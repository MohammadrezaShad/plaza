import styled from "styled-components";

export const StyledWrapper = styled.div`
  max-width: 300px;
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  align-items: center;
  ${({ theme }) => theme.typography.bodyLgBold};
`;
