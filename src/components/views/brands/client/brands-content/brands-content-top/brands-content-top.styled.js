import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledContent = styled.div`
display:flex;
margin-bottom:${({ theme }) => theme.dim[2]};
`

export const StyledTitle = styled.span`
  display:inline-flex;
  color:${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.headline1};
  margin-left:${({ theme }) => theme.dim[2]};
`

export const StyledContainer = styled.div`
 margin:0 -${({ theme }) => theme.dim[3]};
`

export const StyledLink = styled(Link)`
display:inline-flex;
text-decoration:none;
`