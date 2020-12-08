import styled from "styled-components";

export const StyledBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  &:first-child {
    margin-bottom: ${({ theme, acactiveFiltersMain }) =>
      acactiveFiltersMain ? 0 : theme.dim[1]};
  }
`;

export const StyledFilterBadge = styled.div`
  margin-top: ${({ theme }) => theme.dim[1]};
  margin-bottom: ${({ theme }) => theme.dim[1]};
  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.dim[1]};
  }
`;
