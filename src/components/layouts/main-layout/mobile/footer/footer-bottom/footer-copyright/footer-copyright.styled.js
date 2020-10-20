import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width:330px;
  margin:0 auto;
`;

export const StyledText = styled.span`
  display: inline-flex;
  text-align:center;
  ${({ theme }) => theme.typography.subtitleXsNormal};
  color: ${({ theme }) => theme.palette.subtitle};
  &:first-child {
    margin-bottom: ${({ theme }) => theme.dim[1]};
    color: ${({ theme }) => theme.palette.onSurface};
  }
`;
