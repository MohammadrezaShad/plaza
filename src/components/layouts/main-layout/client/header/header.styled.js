import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Wrapper = styled.header`
    padding:0 ${({theme}) => theme.defaults.screenSideDim};
    position:sticky;
    top:0;
    right:0;
    left:0;
    background-color:${({theme}) => theme.palette.back};
`

const Layout = styled.section`
    max-width:${({theme}) => theme.defaults.screenWideSize};
    margin-right:auto;
    margin-left:auto;
`

const TopSection = styled.section`
    display:flex;
    align-items:center;
    min-width:0;
    padding:${({theme}) => theme.dim[2]} 0;
`

const Container = styled.section`
    flex:1;
    padding:0 ${({theme}) => theme.dim[4]};
`

const LogoLink = styled(Link)`
    PATH{
        fill:${({theme}) => theme.palette.primary};
    }
`
const ActionBar = styled.section`
    display:flex;
    align-items:center;
`

export {  
    Wrapper,
    Layout,
    TopSection,
    Container,
    LogoLink,
    ActionBar
}