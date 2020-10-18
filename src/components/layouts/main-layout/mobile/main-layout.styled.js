import styled from 'styled-components';

const Wrapper = styled.div`
    min-height:100%;
    display:flex;
    flex-direction:column;
    direction:${({theme}) => theme.defaults.direction};
    
`

const Container = styled.main`
    flex:1;
`

export {
    Wrapper,
    Container
}