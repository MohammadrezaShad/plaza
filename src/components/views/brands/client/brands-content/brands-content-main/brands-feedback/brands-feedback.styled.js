import styled from 'styled-components';

export const StyledFeedbackWrap = styled.div`
&:not(:first-child){
    margin-top:${({ theme }) => theme.dim[4]};
}
&:not(:last-child){
    & > p {
        padding-bottom:${({ theme }) => theme.dim[4]};
        border-bottom:1px solid ${({ theme }) => theme.palette.strokeVariant};
    }
 }
`