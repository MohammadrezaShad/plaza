import styled from 'styled-components';


export const StyledWrapper = styled.div`
    padding:${({theme}) => theme.dim[2]};
`

export const StyledSpecialWrap = styled.div`
    max-width:${({theme}) => theme.defaults.screenWideSize};
    margin-right:auto;
    margin-left:auto;
`

export const StyledSpecialTitle = styled.h2`
    ${({theme}) => theme.typography.headline1};
    color:${({theme}) => theme.palette.onBack};
    margin-bottom:${({theme}) => theme.dim[2]};
`

export const StyledSpecial = styled.ul`
    display:flex;
    flex-wrap:wrap;
`

export const StyledSpecialItem = styled.li`
    flex:0 0 25%;
`