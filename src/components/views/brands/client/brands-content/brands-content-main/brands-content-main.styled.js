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
 margin: ${({ theme }) => theme.dim[4]} 0;
 width:100% ;
`

export const StyledWrapper = styled.div``

export const StyledFeedbackBlock = styled.div`
 padding:0 ${({ theme }) => theme.dim[2]};
 flex:0 0 66.6%;
 min-width:0;
`

export const StyledFeedbackPagination=styled.div`
 display:flex;
 margin: ${({ theme }) => theme.dim[4]} 0;
 align-items:center;
 justify-content:flex-end;
`

export const StyledContainer = styled.div`
  display:flex;
  margin:0 -${({ theme }) => theme.dim[2]};

`

export const StyledSlider = styled.div`
 padding:0 ${({ theme }) => theme.dim[2]};
 flex:0 0 33.4%;
 min-width:0;
 align-self:flex-start;
`