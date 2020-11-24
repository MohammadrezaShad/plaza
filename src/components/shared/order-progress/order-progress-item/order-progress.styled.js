import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  background-color: ${({ theme, level, index }) =>
    level >= index ? theme.palette.secondary : theme.palette.back};
  width: 48px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  svg {
    color: ${({ theme, level, index }) => level >= index ? 
    theme.palette.onPrimary : theme.palette.disabled};
  }
`;

export const StyledTextWrap = styled.div`
  display: inline-flex;
  flex-flow: column;
  justify-content:center;
  margin-right: ${({ theme }) => theme.dim[1]};
`;

export const StyledText = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  &:first-child {
    ${({ theme }) => theme.typography.bodyMdNormal};
    line-height:1.1;
  }
  &:last-child {
    ${({ theme }) => theme.typography.bodyLgBold};
    line-height:1.1;
  }
`;
