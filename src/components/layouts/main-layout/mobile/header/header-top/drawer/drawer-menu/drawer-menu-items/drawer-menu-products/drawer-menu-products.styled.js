import styled from "styled-components";

export const StyledWrapper = styled.div``;

export const StyledTitle = styled.span`
  display: inline-flex;
  align-items: center;
  margin-bottom:${({theme})=>theme.dim[2]};
  ${({ theme }) => theme.typography.bodyLgBold};
`;
