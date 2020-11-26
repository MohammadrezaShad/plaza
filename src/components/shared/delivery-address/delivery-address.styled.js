import styled from 'styled-components';


export const StyledWrapper = styled.div`
 padding:${({ theme }) => theme.dim[4]};
 border:1px solid ${({theme})=>theme.palette.stroke};
`

export const StyledHead = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin-bottom:${({ theme }) => theme.dim[2]};
`

export const StyledTitle = styled.span`
 display:inline-flex;
 ${({ theme }) => theme.typography.bodyLgBold};
 color:${({ theme }) => theme.palette.onSurface};
`

export const StyledContent = styled.div`
 display:flex;
`

export const StyledCheckbox = styled.div`
 margin-left:${({ theme }) => theme.dim[2]};
`

export const StyledDetail = styled.div`
 display:flex;
 flex-flow:column;
`

export const StyledAddress = styled.p`
 display:inline-flex;
 ${({ theme }) => theme.typography.bodyMdNormal};
 color:${({ theme }) => theme.palette.onSurface};
 line-height:1.4;
`

export const StyledButtonWrap = styled.div`
 display:flex;
 margin-top:${({ theme }) => theme.dim[2]};
 & > button {
     min-height:16px;
     &:first-child{
         margin-left:${({ theme }) => theme.dim[2]};
     }
 }
`

export const StyledSpecifications = styled.div`
 display:flex;
 margin-top:${({ theme }) => theme.dim[1]};
`

export const StyledIcon = styled.div`
 color:${({ theme }) => theme.palette.onSurface};
 margin-left:${({ theme }) => theme.dim[1]};
`

export const StyledText = styled.div`
 display:inline-flex;
 ${({ theme }) => theme.typography.subtitleXsNormal};
 color:${({ theme }) => theme.palette.onSurface};
`