import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height:100%;
    display:flex;
    direction:${({theme}) => theme.defaults.direction};
    align-items:center;
    justify-content:center;
    padding:${({theme}) => theme.dim[2]};
`