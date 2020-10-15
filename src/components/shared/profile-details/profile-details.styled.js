import styled from 'styled-components';

export const StyledText = styled.span`
    display: inline-flex;
    flex-flow: column;
    ${({theme}) => theme.typography.bodyLgBold};
    color: ${({theme})=>theme.palette.onSurface};
    white-space: nowrap;
`;

export const StyledUserName = styled.span`
  display:inline-block;
`;

export const StyledScore = styled.span`
       display:inline-block;
      color: ${({theme})=>theme.palette.nightRider};
      ${({theme}) => theme.typography.bodySmNormal};
`;