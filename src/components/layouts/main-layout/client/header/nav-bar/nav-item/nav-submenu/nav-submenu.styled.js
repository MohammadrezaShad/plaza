import styled, { css } from 'styled-components'

const StyledWrapper = styled.ul`
    
`

const StyledNav = styled.ul`
    position: relative;
    max-width:${({theme}) => theme.defaults.screenWideSize};
    margin-right:auto;
    margin-left:auto;
    background-color:${({theme}) => theme.palette.surface};
    border-radius:${({theme}) => theme.defaults.borderRadius};
    display:flex;
    align-items:center;
    flex-wrap:wrap;
`


const StyledButton = styled.a`
    display: block;
    position:relative;
    ${({theme}) => theme.typography.bodySmNormal};
    color:${({theme}) => theme.palette.onBack};
    line-height:48px;
    padding:0 ${({theme}) => theme.dim[2]};
    cursor:pointer;
    text-decoration:none;
    &:after {
        content:'';
        position:absolute;
        bottom:0;
        left:50%;
        right:50%;
        height:2px;
        background-color:${({theme}) => theme.palette.primary};
        transition:.3s all;
    }
    
`

const StyledItem = styled.li`
    ${({selected}) => selected ? css`
        ${StyledButton}{
            &:after{
                left:${({theme}) => theme.dim[2]};
                right:${({theme}) => theme.dim[2]};
            }
        }
    ` : ''};
`

const StyledContent = styled.ul`
    opacity:${({selected}) => selected ? '1' : '0'};
    display:${({selected}) => selected ? 'block' : 'none'};
    transition:.3s all;
    transition-delay:${({selected}) => selected ? '0' : '.3s display'};
`


export {
    StyledWrapper,
    StyledNav,
    StyledItem,
    StyledButton,
    StyledContent
}