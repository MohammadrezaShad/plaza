import styled from 'styled-components'


export const StyledButton = styled.button`
    padding:0 ${({theme}) => theme.dim[1]};
    display:flex;
    align-items:center;
    ${({theme}) => theme.typography.bodyMdNormal};
    color:${({theme}) => theme.palette.onSurface};
    height:48px;
    width:100%;
    cursor:pointer;
    text-decoration:none;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    min-width:0;
`

export const StyledButtonIcon = styled.span`
    margin-left:${({theme}) => theme.dim[2]};
`