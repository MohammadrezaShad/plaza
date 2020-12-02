import styled from 'styled-components';

export const StyledWrapper = styled.div``


export const StyledItem = styled.li`
 display:flex;
 padding:${({ theme }) => theme.dim[2]};
 border:1px solid ${({ theme }) => theme.palette.strokeVariant};
 &:not(:last-child){
     margin-bottom:${({ theme }) => theme.dim[1]};
 }
`