import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.defaults.screenSideDim};

`

export const StyledBlock = styled.div`
 padding:${({ theme }) => theme.dim[4]};
 border:1px solid ${({ theme }) => theme.palette.stroke};
`

export const StyledBottomWrap = styled.div`
 margin-top:${({ theme }) => theme.dim[2]};

`

export const StyledContent = styled.div`
margin-top:${({ theme }) => theme.dim[4]};
`

export const StyledSlider = styled.div`
margin-top:${({ theme }) => theme.dim[2]};

`