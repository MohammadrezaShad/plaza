import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 464px;
  padding: ${({ theme }) => theme.dim[4]};
  background-color: ${({ theme }) => theme.palette.back};
  direction: rtl;
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.headline2};
  color: ${({ theme }) => theme.palette.onSurface};
  margin-bottom: ${({ theme }) => theme.dim[3]};
`;

export const StyledForm = styled.form``;

export const StyledButtonsWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    &:first-child {
      margin-left: ${({ theme }) => theme.dim[2]};
    }
  }
`;
