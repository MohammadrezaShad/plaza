import styled from 'styled-components';

export const StyledWrapper = styled.div`
    padding:${({theme}) => theme.dim[4]} ${({theme}) => theme.defaults.screenSideDim};
`

export const StyledLayout = styled.div`
    max-width:${({theme}) => theme.defaults.screenWideSize};
    margin-right:auto;
    margin-left:auto;
`

export const StyleContentdBlock=styled.div`
 padding:0 ${({theme})=>theme.dim[2]};
 flex:0 0 75%;
`

export const StyledSidebarBlock=styled.div`
 padding:0 ${({theme})=>theme.dim[2]};
 flex:0 0 25%;
`

export const StyledContainer=styled.div`
    display:flex;
    margin:0 -${({theme})=>theme.dim[2]}
`
