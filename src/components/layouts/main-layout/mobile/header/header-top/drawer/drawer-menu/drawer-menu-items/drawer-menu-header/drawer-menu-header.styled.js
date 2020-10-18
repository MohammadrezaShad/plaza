import styled from "styled-components";

export const StyledWrapper = styled.div`
   display: flex;
    flex-flow: column;
    max-width: 30rem;
    margin-bottom: ${({theme})=>theme.dim[4]};
`;

export const StyledProfile = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme, $loggedIn }) => ($loggedIn ? "transparent" : theme.palette.stroke)};
  text-decoration: none;
`;

export const StyledIcon = styled.span`
  display: inline-flex;
  margin-left: ${({ theme }) => theme.dim[2]};
  color: ${({ theme }) => theme.palette.onSurface};
`;

export const StyledText = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyLgBold}
`;

export const StyledNavigation = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: ${({ theme }) => theme.dim[2]};
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child){
    margin-bottom: ${({ theme }) => theme.dim[2]};
  }
`;
