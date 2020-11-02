import styled from 'styled-components'

const lineHeight = 16
export const StyledWrapper = styled.p`
    margin-top:${({show}) => show ? '2px' : '0'};
    ${({theme}) => theme.typography.subtitleXsNormal};
    color:${({theme}) => theme.palette.error};
    padding-right:${({theme}) => theme.dim[2]};
    line-height:${`${lineHeight}px`};
    max-height:${({show}) => show ? `${lineHeight * 5}px` : 0};
    transition:.3s all;
    opacity:${({show}) => show ? 1 : 0};

`


