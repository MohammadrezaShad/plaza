import styled, {css} from 'styled-components'

const paddingStyle = css`
  padding:${({theme}) => theme.dim[2]} ${({theme}) => theme.dim[3]};
`

export const StyledWrapper = styled.section`
    width:448px;
`


export const StyledHeader = styled.header`
    ${paddingStyle};
    background-color:${({theme}) => theme.palette.surface};
    display:flex;
    align-items:center;
`

export const StyledTitle = styled.h4`
    flex:1;
    min-width:0;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    ${({theme}) => theme.typography.headline2};
    color:${({theme}) => theme.palette.onBack};
    line-height:25px;
`

export const StyledContent = styled.ul`
    margin:${({theme}) => theme.dim[1]};
    padding:${({theme}) => theme.dim[1]} ${({theme}) => theme.dim[2]};
    max-height:266px;
    overflow:auto;
`

export const StyledItem = styled.li`
    padding-top:${({theme}) => theme.dim[2]};
    padding-bottom:${({theme}) => theme.dim[2]};
    display:flex;
    align-items:center;
    border-top:1px solid ${({theme}) => theme.palette.strokeVariant};
    &:first-child {
        border-top:none;
        padding-top:0
    }
    &:last-child {
        padding-bottom:0
    }
`

export const StyledFooter = styled.footer`
    display:flex;
    align-items:center;
    ${paddingStyle};
    border-top:1px solid ${({theme}) => theme.palette.strokeVariant};
`

export const StyledFooterContent = styled.div`
    flex:1;
    min-width:0;
    padding-left:${({theme}) => theme.dim[2]};
`

export const StyledFooterText = styled.span`
    display:block;
    ${({theme}) => theme.typography.buttonXsNormal};
    color:${({theme}) => theme.palette.onBack};
`

export const StyledFooterPrice = styled.strong`
    display:block;
    ${({theme}) => theme.typography.headline3};
    color:${({theme}) => theme.palette.onBack};
`

export const StyledFooterActions = styled.span`
    flex-basis:51%;
`