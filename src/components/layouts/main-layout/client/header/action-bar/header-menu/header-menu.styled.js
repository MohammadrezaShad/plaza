import styled, { css } from 'styled-components'
import IconProvider from '../../../../../../../providers/icon/icon-provider'

const Wrapper = styled.div`
    position:relative;
    margin-right:${({theme}) => theme.dim[2]};
    :first-child{
        margin-right:0
    }
`

const Button = styled.button`
    position:relative;
    display:inline-flex;
    border:1px solid ${({theme, fillColor}) => fillColor ? theme.getUserLevelColor(fillColor) : theme.palette.stroke};
    padding:${({theme}) => theme.dim[1]};
    border-radius: ${({theme}) => theme.defaults.borderRadius};
    ${({theme}) => theme.typography.bodyMdNormal};
    cursor:pointer;
    text-decoration:none;
    color:${({theme,fillColor}) => fillColor ? theme.palette.back : theme.palette.onSurface};
    align-items:center;
    height:40px;
    background-color:${({theme, fillColor}) => fillColor ? theme.getUserLevelColor(fillColor) : theme.palette.back};
    PATH{
        fill:${({theme, fillColor}) => fillColor ? theme.palette.back : theme.palette.onSurface};
    }

    ${({warning}) => warning ? css`
    &:after{
         content:'';
        position:absolute;
        top:4px;
        left:4px;
        width:8px;
        height:8px;
        border-radius:50%;
        background-color:${({theme}) => theme.palette.error};
        border:2px solid ${({theme}) => theme.palette.back}
    }
    ` : ''}
`

const ButtonIcon = styled(IconProvider)`
    margin-right:${({theme}) => theme.dim[1]};
    :first-child{
        margin-right:0
    }
    margin-left:${({theme}) => theme.dim[1]};
    :last-child{
        margin-left:0
    }
`

const ButtonText = styled.span`
    
`

const ButtonCount = styled.span`
    position:relative;
    background-color:${({theme}) => theme.palette.secondary};
    color:${({theme}) => theme.palette.onSecondary};
    border-radius:${({theme}) => theme.defaults.borderRadius};
    min-width:22px;
    padding:0 4px;
    text-align:center;

    &:after{
        content:'';
        position:absolute;
        right:100%;
        border:4px solid transparent;
        border-right-color:${({theme}) => theme.palette.secondary};
        top:50%;
        transform:translateY(-50%);
    }
`

const ContextMenu = styled.div`
    position:absolute;
    margin-top:${({theme}) => theme.dim[2]};
    top:100%;
    min-width:300px;
    left:-${({theme}) => theme.dim[1]};
    opacity:${({show}) => show ? 1 : 0};
    visibility:${({show}) => show ? 'visible' : 'hidden'};
    transition:.3s all;
    border:1px solid ${({theme}) => theme.palette.stroke};
    border-radius:${({theme}) => theme.defaults.borderRadius};
    background-color:${({theme}) => theme.palette.back};
    z-index:5;
    box-shadow:${({theme}) => theme.defaults.boxShadow};
    overflow:hidden;
`

const ContextMenuArrow = styled.span`
    position:absolute;
    top:100%;
    margin-top:1px;
    left:0;
    width:100%;
    height:${({theme}) => theme.dim[2]};
    z-index:10;

    opacity:${({show}) => show ? 1 : 0};
    visibility:${({show}) => show ? 'visible' : 'hidden'};
    transition:.3s all;

    &::before{
        content:'';
        position:absolute;
        bottom:0;
        left:50%;
        transform:translateX(-50%);
        transition:.3s all;
        border:8px solid transparent;
        border-bottom-color:${({theme}) => theme.palette.stroke};
    }

    &::after{
        content:'';
        position:absolute;
        bottom:0;
        left:50%;
        transform:translateX(-50%);
        transition:.3s all;
        border:6px solid transparent;
        border-bottom-color:${({theme, hasheader}) => hasheader ? theme.palette.surface : theme.palette.back};
    }
    
`


export {
    Wrapper,
    Button,
    ButtonIcon,
    ButtonText,
    ButtonCount,
    ContextMenu,
    ContextMenuArrow
}