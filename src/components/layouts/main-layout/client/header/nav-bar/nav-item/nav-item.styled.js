import styled from 'styled-components'

const StyledSubmenu = styled.div`
    position:absolute;
    right:0;
    left:0;
    padding:0 ${({theme}) => theme.defaults.screenSideDim};
    top:100%;
    background-color:${({theme}) => theme.palette.back};
    opacity:0;
    visibility:hidden;
    transition:.3s all;
    box-shadow:${({theme}) => theme.defaults.boxShadow};
    transform:translateY(10px);
    transition-delay:.3s;
`

const StyledButton = styled.a`
    position:relative;
    display:inline-flex;
    align-items:center;
    padding:0 ${({theme}) => theme.dim[1]};
    ${({theme}) => theme.typography.bodyMdNormal};
    color:${({theme}) => theme.palette.onBack};
    text-decoration:none;
    line-height:${({theme}) => theme.defaults.navHeight};
    cursor: pointer;

    &:after {
        content:'';
        position:absolute;
        top:100%;
        right:0;
        left:0;
        height:${({theme}) => theme.dim[1]};
        visibility:hidden;
    }
`

const StyledButtonIcon = styled.span`
    transition:.3s transform;
    transition-delay:.3s;
    margin-right:${({theme}) => theme.dim[1]};
`

const StyledWrapper = styled.li`
    margin-right:${({theme}) => theme.dim[1]};
    margin-left:${({theme}) => theme.dim[1]};
    &:first-child{
        margin-right:0;
    }
    &:last-child{
        margin-left:0;
    }

    

    &:hover {
        ${StyledSubmenu}{
            opacity:1;
            visibility:visible;
            transform:translateY(0);
            transition-delay:0;
        }

        ${StyledButton}{
            &:after{
                visibility:visible;
            }
        }

        ${StyledButtonIcon}{
            transform:rotate(180deg);
            transition-delay:0;
        }
    }
`





export {
    StyledWrapper,
    StyledButton,
    StyledButtonIcon,
    StyledSubmenu
}