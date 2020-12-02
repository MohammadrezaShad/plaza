import styled from 'styled-components';


export const StyledBlock = styled.div`
 display:flex;
 flex-wrap:wrap;
`

export const StyledFilterBadge = styled.div`
 margin-top:${({ theme }) => theme.dim[1]};
 margin-bottom:${({ theme }) => theme.dim[1]};
 &:not(:last-child){
     margin-left:${({ theme }) => theme.dim[1]}
 }

`