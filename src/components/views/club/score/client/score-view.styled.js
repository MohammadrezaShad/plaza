import styled from 'styled-components'


export const StyledWrapper = styled.section`
    margin-right:25%;

`

export const StyledHeader = styled.header`
    display:flex;
    align-items:center;
`

export const StyledHeaderContent = styled.div`
    flex:1;
    min-width:0;
`

export const StyledHeaderTitle = styled.h1`
    ${({theme}) => theme.typography.headline2};
    color:${({theme}) => theme.palette.onBack};
`

export const StyledChartGuide = styled.span`
    display:inline-flex;
    align-items:center;
    margin-left:${({theme}) => theme.dim[3]};
    ${({theme}) => theme.typography.subtitleXsNormal};
    color:${({theme}) => theme.palette.onBack};
    :last-child{
        margin-left:0;
    }
`


export const StyledChartGuideIcon = styled.span`
    width:8px;
    height:8px;
    border-radius:${({theme}) => Math.max(0, parseInt(theme.defaults.borderRadius) - 2) + 'px'};
    background-color:${({theme, $all}) => $all ? theme.palette.secondary : theme.palette.primary};
    margin-left:${({theme}) => theme.dim[1]};
    margin-bottom:1px;
`


export const StyledHeaderActions = styled.span`
    width:300px;
    background-color:orange;
`