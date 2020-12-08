import styled from 'styled-components';

export const StyledWrapper = styled.ul`
display:flex;
flex-wrap:wrap;
margin-left:-${({ theme }) => `${parseInt(theme.dim[1]) / 2}px`};
`

export const StyledItem = styled.li`
 position:relative;
 flex:0 0 25%;
 transition:all .3s;
 &:hover{
    box-shadow: 0 0 20px rgba(0,0,0,.1);
    z-index:10;
 }
 ${({ theme }) => theme.breakPoints.desktop}{
    flex:0 0 33.3%;
 }
 padding:${({ theme }) => theme.dim[3]};
 padding-bottom:${({ theme }) => theme.dim[6]};
 padding-top:${({ theme }) => theme.dim[7]};
 border:${({ theme }) => `1px solid ${theme.palette.strokeVariant}`};
 border-radius:${({ theme }) => theme.defaults.borderRadius};
 margin-right:-1px;
 margin-top:-1px;
`