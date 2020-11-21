import styled from 'styled-components';

export const StyledBlock = styled.div`
 padding:${({ theme }) => theme.dim[4]};
 &:first-child{
     border:1px solid ${({ theme }) => theme.palette.stroke};
 }
 &:not(:first-child):not(:last-child){
    border-bottom:1px solid ${({ theme }) => theme.palette.stroke};

 }
`