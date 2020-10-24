import styled from 'styled-components'


export const StyledImageButton = styled.a`
    width:72px;
    height:72px;
`


export const StyledImage = styled.img`
    display:block;
    width:100%;
    height:100%;
    color:${({theme}) => theme.palette.onBack};
`


export const StyledContent = styled.div`
    flex:1;
    min-width:0;
    margin-right:${({theme}) => theme.dim[2]};
    margin-left:${({theme}) => theme.dim[2]};
`


export const StyledTitle = styled.a`
    display:inline-block;
    ${({theme}) => theme.typography.bodySmBold};
    color:${({theme}) => theme.palette.onBack};
    text-decoration:none;
    line-height:1.8;
    height:3.6em;
    overflow:hidden;
    margin-bottom:${({theme}) => theme.dim[1]};
`


export const StyledButton = styled.button`
    width:40px;
    height:40px;
    border-radius:${({theme}) => theme.defaults.borderRadius};
    display:inline-flex;
    align-items:center;
    justify-content:center;
    color:${({theme}) => theme.palette.onBack};
    background-color:${({theme}) => theme.palette.surface};
    cursor:pointer;
`


export const StyledDetail = styled.ul`
    display:flex;
    justify-content:space-between;
    
`


export const StyledDetailText = styled.li`
    display:flex;
    align-items:center;
    color:${({theme}) => theme.palette.onBack};
    ${({theme}) => theme.typography.bodySmNormal};
    SPAN {
        
        border-right:1px solid ${({theme}) => theme.palette.stroke};
        padding-right:${({theme}) => theme.dim[1]};
        padding-left:${({theme}) => theme.dim[1]};
        white-space:nowrap;
        &:first-child{
            border-right:none;
            padding-right:0;
        }
        &:last-child{
            padding-left:0;
        }
    }
`


export const StyledPrice = styled.strong`
    margin-left:${({theme}) => theme.dim[1]};
    color:${({theme}) => theme.palette.primary};
    ${({theme}) => theme.typography.bodyMdNormal};
    
`
