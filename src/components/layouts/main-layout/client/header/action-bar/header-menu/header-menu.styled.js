import styled from 'styled-components'
import IconProvider from '../../../../../../../providers/icon/icon-provider'

const Wrapper = styled.div`
    margin-right:${({theme}) => theme.dim[2]};
    :first-child{
        margin-right:0
    }
`

const Button = styled.button`
    display:inline-flex;
    border:1px solid ${({theme}) => theme.palette.stroke};
    padding:${({theme}) => theme.dim[1]};
    border-radius: ${({theme}) => theme.defaults.borderRadius};
    ${({theme}) => theme.typography.bodyMdNormal};
    cursor:pointer;
    text-decoration:none;
    color:${({theme}) => theme.palette.onSurface};
    align-items:center;
    height:40px;
    PATH{
        fill:${({theme}) => theme.palette.onSurface};
    }
`

const ButtonIcon = styled(IconProvider)`
    margin-right:${({theme}) => theme.dim[1]};
    :first-child{
        margin-right:0
    }
    margin-left:${({theme}) => theme.dim[1]};
    :last-child{
        margin-left:0
    }
`

const ButtonText = styled.span`
    
`


export {
    Wrapper,
    Button,
    ButtonIcon,
    ButtonText
}