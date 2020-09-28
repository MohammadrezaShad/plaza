import styled from 'styled-components'

const Wrapper = styled.footer`
    padding:0 ${({theme}) => theme.defaults.screenSideDim};
`

const Layout = styled.section`
    max-width:${({theme}) => theme.defaults.screenWideSize};
    margin-right:auto;
    margin-left:auto;
`

export {
    Wrapper,
    Layout
} 
