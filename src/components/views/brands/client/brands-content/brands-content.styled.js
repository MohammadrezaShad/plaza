import styled from 'styled-components';


export const StyledBlock=styled.div`
&:first-child{
    margin-bottom:${({theme})=>theme.dim[6]};
    padding-bottom:${({theme})=>theme.dim[6]};
}
`