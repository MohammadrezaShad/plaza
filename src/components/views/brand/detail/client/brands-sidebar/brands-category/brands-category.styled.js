import styled from 'styled-components';

export const StyledHead = styled.div`
  margin-bottom:${({ theme }) => theme.dim[2]};
`

export const StyledTitle = styled.span`
display:flex;
color:${({ theme }) => theme.palette.onSurface};
${({ theme }) => theme.typography.headline2};
`

export const StyledSubTitle = styled.span`
display:flex;
color:${({theme})=>theme.palette.subtitle};
${({theme})=>theme.typography.subtitleXsNormal};
`

export const StyledSearch=styled.div`
  margin-bottom:${({ theme }) => theme.dim[3]};
`

export const StyledBlock=styled.div`

`

export const StyledContent = styled.div`
  max-height:${({showMore})=>showMore ? '3000px':'65px'};
  transition:${({showMore })=>showMore ? ' max-height 1s ease-in-out':'max-height 0.5s cubic-bezier(0, 1, 0, 1)'} ;
  overflow:hidden;
`

export const StyledButton = styled.span`
display:inline-flex;
margin-top:${({ theme }) => theme.dim[3]};
`

export const StyledIcon = styled.span`
 color:${({ theme }) => theme.palette.secondary};
 margin-right:8px;
`