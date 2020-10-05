import styled from 'styled-components'


const StyledWrapper = styled.nav`
    max-width:${({theme}) => theme.defaults.screenWideSize};
    margin-right:auto;
    margin-left:auto;
    margin-top:${({theme, show}) => show ? '0' : '-' + theme.defaults.navHeight};
    transition:.3s margin-top;
`

const StyledSeparator = styled.span`
    height:22px;
    width:1px;
    background-color:${({theme}) => theme.palette.stroke};
    margin-right:${({theme}) => theme.dim[1]};
    margin-left:${({theme}) => theme.dim[1]};
`

const StyledLayout = styled.ul`
    display:flex;
    align-items:center;
    margin-right:-${({theme}) => theme.dim[1]};
    margin-left:-${({theme}) => theme.dim[1]};
`

export {
    StyledWrapper,
    StyledSeparator,
    StyledLayout
}