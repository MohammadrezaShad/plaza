import styled from 'styled-components';

export const StyledWrapper = styled.div`
display:flex;
position:relative;
left:${({ $left }) => `${$left}px`};
transition:all 1.5s;
`
export const StyledContainer = styled.div`
overflow:hidden;

`

export const StyledContent = styled.div`
margin: 0 -${({ theme }) => `${parseInt(theme.dim[2]) * 0.75}px`};

`

export const StyledHead = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-bottom:${({ theme }) => theme.dim[2]};
`


export const StyledItemWrap = styled.div`
padding: 0 ${({ theme }) => `${parseInt(theme.dim[2]) * 0.75}px`};
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
  min-width:109px;
  flex-shrink:0;
  height:160px;
`

export const StlyedText = styled.div`
  display:inline-block;
  text-align:center;
  margin-top:${({ theme }) => theme.dim[3]};
  color:${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.subtitleXsNormal};
  max-width:76px;
`

export const StyledButtonWrap = styled.div`
 display:flex;
 align-items:center;
 & > button {
   &:first-child{
     margin-left:${({ theme }) => theme.dim[2]};
   }
 }

`

export const StyledTitle = styled.span`
  display:inline-block;
  color:${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.headline2};
`