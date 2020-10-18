import styled from 'styled-components'

export const StyledWrapper = styled.section`
    margin:${({theme}) => theme.dim[2]} auto;
    padding:${({theme}) => theme.dim[2]};
    border:1px solid ${({theme}) => theme.palette.stroke};
    width:300px;
    max-width:100%;
    text-align:center

`