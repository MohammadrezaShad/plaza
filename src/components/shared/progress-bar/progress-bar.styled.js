import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding-bottom:1px;
`;

export const StyledPoint = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.subtitleXsNormal};
  color: ${({ theme }) => theme.palette.subtitle};
`;

