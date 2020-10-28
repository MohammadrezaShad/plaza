import styled from 'styled-components'

const StyledWrapper = styled.div`
    padding: ${({theme}) => theme.dim[1]} 0;
    display: flex;
    max-width:${({theme}) => theme.defaults.screenWideSize};
    margin-right:auto;
    margin-left:auto;
`

const StyledCol = styled.div`
    flex:1;
    min-width:0;
`








export {
    StyledWrapper,
    StyledCol
}