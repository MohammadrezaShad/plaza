import styled from "styled-components";

export const StyledHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.dim[1]};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
`;

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.back};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  min-width: 300px;
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyLgBold};
`;

export const StyledIcon = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  cursor: pointer;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-flow: column;
  padding: ${({ theme }) => theme.dim[1]};
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.dim[2]};
  }
  span {
    line-height: 1.85;
  }
`;
