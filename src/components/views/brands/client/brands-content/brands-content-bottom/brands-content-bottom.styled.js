import styled from 'styled-components';

export const StyledWrapper = styled.div`
 padding:${({ theme }) => theme.dim[4]};
 background-color:${({ theme }) => theme.palette.surface};
`

export const StyledItem = styled.div`
  display:flex;
  flex-flow:column;
  align-items:center;
  justify-content:center;
  background-color:${({ theme }) => theme.palette.back};
  border-radius:${({ theme }) => theme.defaults.borderRadius};
  border:1px solid ${({ theme }) => theme.palette.stroke};
  width:109px;
  flex-shrink:0;
  height:160px;
  &:not(:last-child){
    margin-left:${({ theme }) => theme.dim[3]};
  }
`

export const StlyedText = styled.div`
  display:inline-block;
  text-align:center;
  margin-top:${({ theme }) => theme.dim[3]};
`

export const StyledDescription = styled.div`
padding:${({ theme }) => theme.dim[4]};
 border:1px solid ${({ theme }) => theme.palette.stroke};
 margin-top:${({ theme }) => theme.dim[4]};
`

export const StyledDescriptionTitle = styled.span`
  display:inline-block;
  color:${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyLgBold};
  margin-bottom:${({ theme }) => theme.dim[2]};
  line-height:1.4;
`

export const StyledDescriptionText = styled.p`
  display:inline-block;
  color:${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyMdNormal};
  line-height:1.9;
`