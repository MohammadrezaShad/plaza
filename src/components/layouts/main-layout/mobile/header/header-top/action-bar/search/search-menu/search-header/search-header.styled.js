import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.dim[2]};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
`;

export const StyledText = styled.span`
  ${({ theme }) => theme.typography.bodyLgBold};
  color: ${({ theme }) => theme.palette.onSurface};
`;

export const StyledIcon = styled.span`
  color: ${({ theme }) => theme.palette.onSurface};
`;
