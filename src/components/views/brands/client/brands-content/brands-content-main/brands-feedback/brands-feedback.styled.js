import styled from 'styled-components';

export const StyledFeedbackWrap = styled.div`
position:relative;
&:not(:first-child){
    margin-top:${({ theme }) => theme.dim[4]};
}
&:not(:last-child){    
        padding-bottom:${({ theme }) => theme.dim[4]};
        &:after {
          position:absolute;
          content:"";
          height:1px;
          bottom:0;
          background-color:${({ theme }) => theme.palette.strokeVariant};
          right:${({ theme }) => theme.dim[7]};
          left:0;
        }
 }

`