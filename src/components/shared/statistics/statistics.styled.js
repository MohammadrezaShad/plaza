import styled from 'styled-components';

export const StyledWrapper = styled.div`
 direction:rtl;
 padding:${({ theme }) => theme.dim[3]};
 background-color:${({ theme }) => theme.palette.back};
`

export const StyledBlock = styled.div`
 
&:not(:last-child){
    margin-bottom:${({ theme }) => theme.dim[1]};
} 
`