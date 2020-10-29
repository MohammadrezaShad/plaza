import styled from 'styled-components'


const StyledWrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    height:100%;
    width:100%;
    z-index:1000;
    overflow:auto;
`

const StyledOverlay = styled.span`
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    background-color:${({theme}) => theme.palette.overlay};
    opacity:.5;
    z-index:1;
`


const StyledLayout = styled.div`
    position:relative;
    padding:${({theme}) => theme.dim[2]};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-height:100%;
`

const StyledContainer = styled.div`
    position:relative;
    z-index:5;
    max-width:100%;
`


export {
    StyledWrapper,
    StyledOverlay,
    StyledLayout,
    StyledContainer
}