import styled from 'styled-components'

export const StyledWrapper = styled.div`
    min-height:300px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    PATH {
        fill:${({theme}) => theme.palette.stroke}
    }

    ellipse {
        fill:${({theme}) => theme.palette.strokeVariant}
    }

`

export const StyledText = styled.p`
    margin-top:${({theme}) => theme.dim[2]};
    ${({theme}) => theme.typography.bodyMdNormal};
    color:${({theme}) => theme.palette.onBack};
`