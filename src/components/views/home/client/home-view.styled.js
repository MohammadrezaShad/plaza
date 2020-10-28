import styled from 'styled-components';


export const StyledWrapper = styled.div`
    padding:${({theme}) => theme.dim[2]} 0;
`

export const StyledSpecial = styled.ul`
    display:flex;
    flex-wrap:wrap;
`

export const StyledSpecialItem = styled.li`
    flex:0 0 25%;
`