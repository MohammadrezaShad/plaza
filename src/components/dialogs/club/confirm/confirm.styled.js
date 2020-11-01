import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 464px;
  padding: ${({ theme }) => theme.dim[4]};
  background-color: ${({ theme }) => theme.palette.back};
  direction: rtl;
`;

export const StyledName = styled.span`
  display: inline-block;
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.primary};
  ${({ theme }) => theme.typography.bodyLgBold};
  margin-left: 5px;
`;

export const StyledText = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyLgBold};
  margin-bottom: ${({ theme }) => theme.dim[3]};
`;
export const StyledButtonsWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    &:first-child {
      margin-left: ${({ theme }) => theme.dim[2]};
    }
  }
`;
