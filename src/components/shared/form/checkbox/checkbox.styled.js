import styled from 'styled-components'


export const StyledCheckbox = styled.span`
    display:inline-flex;
    align-items:center;
    justify-content:center;
    width:24px;
    height:24px;
    border-radius:${({theme}) => Math.max(parseInt(theme.defaults.borderRadius) - 1, 0) + 'px'};
    border:1px solid ${({theme}) => theme.palette.stroke};
    background-color:${({theme}) => theme.palette.back};
    transition:.3s all;
`

export const StyledCheckboxIcon = styled.svg`
    opacity:0;
    transition:.3s all;
    PATH {
        fill:${({theme}) => theme.palette.onSuccess};
    }
`

export const StyledWrapper = styled.span`
    position:relative;
    display:inline-flex;
    align-items:center;
    user-select:none;
    cursor: pointer;
`

export const StyledInput = styled.input`
    position:absolute;
    top:0;
    right:0;
    width:100%;
    height:100%;
    opacity:0;
    cursor: pointer;
    z-index:10;
    :checked + ${StyledCheckbox} {
        border-color:${({theme}) => theme.palette.success};
        background-color:${({theme}) => theme.palette.success};
        ${StyledCheckboxIcon}{
            opacity:1;
        }
    }

`

export const StyledText = styled.span`
    margin-right:${({theme}) => theme.dim[1]};
    ${({theme}) => theme.typography.bodyMdNormal};
    color:${({theme}) => theme.palette.onBack};
`