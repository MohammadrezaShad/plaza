import styled from 'styled-components'

const StyledWrapper = styled.div`
    margin:${({theme}) => theme.dim[1]} ${({theme}) => theme.dim[2]};
`

const StyledIcon = styled.span`
    color:${({theme}) => theme.palette.disabled};
`

const StyledTitle = styled.span`
    display:inline-flex;
    align-items:center;
    ${({theme}) => theme.typography.bodySmBold};
    color:${({theme}) => theme.palette.onBack};
    text-decoration:none;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    transition:.3s all;
    margin-bottom:${({theme}) => theme.dim[1]};
    max-width:100%;
    line-height:2;

    ${StyledIcon}{
        margin-right:${({theme}) => theme.dim[1]};
    }

    &[href]:hover{
        color:${({theme}) => theme.palette.secondary};
        ${StyledIcon}{
            color:${({theme}) => theme.palette.secondary};
        }
    }
`

const StyledLinkWrap = styled.div`
    
`

const StyledLinkText = styled.span`
    display:block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    transition:.3s all;
    line-height:2;
`

const StyledLink = styled.a`
    display:inline-flex;
    align-items:center;
    
    text-decoration:none;
    max-width:100%;
    ${({theme}) => theme.typography.bodySmNormal};
    color:${({theme}) => theme.palette.subtitle};

    ${StyledIcon}{
        margin-left:${({theme}) => theme.dim[1]};
    }

    &:hover{
        color:${({theme}) => theme.palette.secondary};
        ${StyledIcon}{
            color:${({theme}) => theme.palette.secondary};
        }
    }
`




export {
    StyledWrapper,
    StyledTitle,
    StyledIcon,
    StyledLinkWrap,
    StyledLink,
    StyledLinkText
}