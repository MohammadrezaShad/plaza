import styled from 'styled-components';


export const StyledBlock = styled.div`
   margin-bottom:${({ theme }) => theme.dim[3]};
`

export const StyledFilter = styled.div`
 display:flex;
 background-color:${({ theme }) => theme.palette.surface};
 padding:${({ theme }) => theme.dim[2]};
 margin-bottom:${({ theme }) => theme.dim[3]};

`

export const StyledProducts = styled.div``

export const StyledPagination = styled.div`
 display:flex;
 justify-content:flex-end;
 margin:0 ${({ theme }) => theme.dim[4]};
`