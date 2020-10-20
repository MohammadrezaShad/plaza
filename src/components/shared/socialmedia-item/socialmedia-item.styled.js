import styled from 'styled-components';


export const StyledLink = styled.a`
  display: inline-flex;
  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.dim[4]};
  }
`;

export const StyledIcon=styled.span`
display:inline-flex;
color:${({theme})=>theme.palette.onSurface};
`