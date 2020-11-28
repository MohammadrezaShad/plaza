import styled from 'styled-components';


export const StyledHead = styled.div`
 display:flex;
 justify-content:space-between;
`

export const StyledText = styled.span`
display:inline-flex;
${({ theme }) => theme.typography.subtitleXsNormal};
color:${({ theme }) => theme.palette.onSurface};
line-height:1.8;

`
export const StyledProgress = styled.span`
  display:flex;
  position: relative;
  border-radius:${({ theme }) => theme.defaults.borderRadius};
  background-color:${({ theme }) => theme.palette.surface};
  height:4px;
`

export const StyledLayout = styled.span`
  position: absolute;
  background-color:${({ theme }) => theme.palette.primary};
  border-radius:${({ theme }) => theme.defaults.borderRadius};
  top:0;
  bottom:0;
  right:0;
  width:${({progress})=>`${progress*100}%`};
`

