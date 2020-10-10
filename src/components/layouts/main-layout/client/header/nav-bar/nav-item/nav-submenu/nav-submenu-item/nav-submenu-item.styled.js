import styled from 'styled-components'

const StyledWrapper = styled.div`
    padding: ${({theme}) => theme.dim[1]} 0;
    display: flex;
`

const StyledCol = styled.div`
    flex:1;
    min-width:0;
`








export {
    StyledWrapper,
    StyledCol
}