import styled from 'styled-components';


 const Copyright=styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`
 const Text=styled.span`
    display:inline-flex;
    ${({ theme }) => theme.typography.subtitleXsNormal};
    color: ${({ theme }) => theme.palette.subtitle};
    &:first-child{
    margin-bottom: ${({ theme }) => theme.dim[1]};
    color: ${({ theme }) => theme.palette.onSurface};
    }
`
export {
    Copyright,
    Text
}