import styled from 'styled-components'


export const StyledWrapper = styled.section`
    margin-right:25%;

`

export const StyledBlock = styled.section`
    margin-top:${({theme}) => theme.dim[4]};
    :first-child{
        margin-top:0;
    }
`

