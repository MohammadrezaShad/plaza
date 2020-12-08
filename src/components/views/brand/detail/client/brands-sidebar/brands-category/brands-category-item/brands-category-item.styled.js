import styled from 'styled-components';


export const StyledWrap = styled.div`
 &:not(:first-child){
     margin-top:${({ theme }) => theme.dim[2]};
 }
`

