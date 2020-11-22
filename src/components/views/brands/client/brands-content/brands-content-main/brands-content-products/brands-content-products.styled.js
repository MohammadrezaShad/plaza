import styled from 'styled-components';

export const StyledWrapper = styled.div`
display:flex;
flex-wrap:wrap;
margin-left:-${({ theme }) => theme.dim[1]};
`