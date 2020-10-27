import styled from 'styled-components'

export const StyledWrapper = styled.section`
    margin-top:${({theme, marginTopUnit}) => marginTopUnit ? theme.dim[marginTopUnit] : theme.dim[3]};

    :first-child{
        margin-top:0;
    }
`