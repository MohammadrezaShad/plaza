import styled from 'styled-components'


export const StyledWrapper = styled.section`
`

export const StyledBlock = styled.section`
    margin-top:${({theme}) => theme.dim[4]};
    :first-child{
        margin-top:0;
    }
`

