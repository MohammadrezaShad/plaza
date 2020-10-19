import styled from 'styled-components'


const Wrapper = styled.section`
`

const Header = styled.header`
    padding:${({theme}) => theme.dim[2]};
    background-color:${({theme}) => theme.palette.surface};
    display:flex;
    align-items:center;

`

const HeaderContent = styled.div`
    flex:1;
`

const HeaderTitle = styled.strong`
    display:block;
    ${({theme}) => theme.typography.bodyMdNormal};
    color:${({theme}) => theme.palette.onSurface};
`

const HeaderText = styled.span`
    display:block;
    ${({theme}) => theme.typography.subtitleXsNormal};
    color:${({theme}) => theme.palette.subtitle};
`

const Content = styled.div`
    padding:${({theme}) => theme.dim[2]};
    background-color:${({theme}) => theme.palette.back};
`

const Button = styled.button`
    padding:0 ${({theme}) => theme.dim[1]};
    display:flex;
    align-items:center;
    ${({theme}) => theme.typography.bodyMdNormal};
    color:${({theme}) => theme.palette.onSurface};
    height:48px;
    width:100%;
    cursor:pointer;
    text-decoration:none;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    min-width:0;
`

const ButtonIcon = styled.span`
    margin-left:${({theme}) => theme.dim[2]};
`


export {
    Wrapper,
    Header,
    HeaderContent,
    HeaderTitle,
    HeaderText,
    Content,
    Button,
    ButtonIcon
}