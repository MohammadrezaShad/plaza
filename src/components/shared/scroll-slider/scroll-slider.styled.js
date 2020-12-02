import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledWrapper = styled.div`
overflow:hidden;
`

export const StyledHead = styled.div`
 margin-bottom:${({ theme }) => theme.dim[2]};
`

export const StyledTitle = styled.span`
  position:relative;
  display:inline-flex;
  ${({ theme }) => theme.typography.headline2}
  color: ${({ theme }) => theme.palette.onSurface};
  margin-right:${({ theme }) => theme.dim[2]};

  &::before{
    content: "";
    position: absolute;
    right: -8px;
    transform:translate(100%,-50%);
    top: 50%;
    background-color: ${({ theme }) => theme.palette.primary};
    width: 4px;
    height: 16px;
  }
`

export const StyledButton = styled(Link)`
 text-decoration:none;

`

export const StyledContainer = styled.div`
 display:flex;
`

export const StyledContent = styled.div`
 overflow:scroll;
 scrollbar-width: none;
 -ms-overflow-style: none; 
 -webkit-overflow-scrolling: touch;
 &::-webkit-scrollbar {
  display: none;
}
`

export const StyledItem = styled.li`
 position:relative;
 flex:0 0 25%;
 transition:all .3s;
 padding:${({ theme }) => theme.dim[3]};
 padding-bottom:${({ theme }) => theme.dim[6]};
 padding-top:${({ theme }) => theme.dim[7]};
 border:${({ theme }) => `1px solid ${theme.palette.strokeVariant}`};
 border-radius:${({ theme }) => theme.defaults.borderRadius};
 &:not(:first-child){
   margin-right:${({ theme }) => theme.dim[2]};
 }
 `

