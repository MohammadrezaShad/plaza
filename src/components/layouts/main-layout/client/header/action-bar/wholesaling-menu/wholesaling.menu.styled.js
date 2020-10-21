import styled, { css } from 'styled-components'

const paddingStyle = css`
  padding:${({theme}) => theme.dim[2]} ${({theme}) => theme.dim[3]};
`

export const StyledHeader = styled.header`
    ${paddingStyle};
    background-color:${({theme}) => theme.palette.surface};
    display:flex;
    align-items:center;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    ${({theme}) => theme.typography.headline2};
    color:${({theme}) => theme.palette.onBack};
    line-height:25px;
`


export const StyledContent = styled.div`
    padding:${({theme}) => theme.dim[2]};
    background-color:${({theme}) => theme.palette.back};
`

export const StyledStateIcon = styled.span`
    margin-right:auto;
    color:${({theme, isSuccess}) => isSuccess ? theme.palette.success : theme.palette.error}
`

