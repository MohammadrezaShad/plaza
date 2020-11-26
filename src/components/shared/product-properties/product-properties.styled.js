import styled from 'styled-components';

export const StyledWrapper = styled.div`
border:1px solid ${({ theme }) => theme.palette.stroke};
`

export const StyledHead = styled.div`
  padding:${({ theme }) => theme.dim[3]} ${({ theme }) => theme.dim[4]};
`

export const StyledTitle = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.onSurface};
 ${({ theme }) => theme.typography.bodyLgBold};
`

export const StyledContent = styled.div`
  padding:${({ theme }) => theme.dim[4]};
  padding-top:0;
`

export const StyledBlock = styled.div`
display:flex;
align-items:center;
 &:not(:last-child){
    border-bottom:1px solid ${({ theme }) => theme.palette.strokeVariant};
 }
 &:nth-child(2){
     min-height:286px;
     flex-flow:column;
     align-items:normal;
 }
 &:first-child{
     padding-bottom:${({ theme }) => theme.dim[2]};
 }
 &:last-child{
    padding-top:${({ theme }) => theme.dim[3]};
   justify-content:flex-end;
 }
 &:not(:last-child):not(:first-child){
     padding:${({ theme }) => theme.dim[3]} 0;
 }
`

export const StyledContainer = styled.div`
 display:flex;
 align-items:center;
 &:not(:last-child){
     margin-bottom:${({ theme }) => theme.dim[2]};
 }
`

export const StyledText = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.onSurface};
 ${({ theme }) => theme.typography.bodyMdNormal};
`

export const StyledDetailText = styled.span`
 display:inline-flex;
 flex:0 0 40%;
 color:${({ theme }) => theme.palette.onSurface};
 ${({ theme }) => theme.typography.bodySmNormal};
 margin-left:${({ theme }) => theme.dim[1]};
`

export const StyledSubText = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.subtitle};
 ${({ theme }) => theme.typography.bodySmNormal};
`

export const StyledIcon = styled.span`
 color:${({ theme, $color }) => $color === 1 ?
    theme.palette.success : $color === 2 ? theme.palette.secondary :
      theme.palette.onSurface};
`
export const StyledHighlightText = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.primary};
 ${({ theme }) => theme.typography.bodyMdNormal};
 margin:0 4px;
`

export const StyledDetail = styled.div`
 display:inline-flex;
 flex-flow:column;
 flex:1;
 margin:0 ${({ theme }) => theme.dim[1]};
 ${StyledHighlightText}{
   margin:0 0 0 4px;
   ${({ theme }) => theme.typography.subtitleXsBold};

 }
`

export const StyledAltText = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.subtitle};
 ${({ theme }) => theme.typography.subtitleXsNormal};
`



export const StyledButtonWrap = styled.div`
 display:inline-flex;
 align-items: center;
 &:first-child{
   margin-left:${({ theme }) => theme.dim[4]};
 }
`

export const StyledButtonText = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.onSurface};
 ${({ theme }) => theme.typography.bodyMdNormal};
 margin-right:${({ theme }) => theme.dim[1]};
`
