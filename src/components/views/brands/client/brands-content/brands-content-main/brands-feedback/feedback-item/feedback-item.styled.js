import styled from 'styled-components';





export const StlyedContent = styled.div`

`

export const StyledHead = styled.div`
 display:flex;
 align-items:center;
 margin-bottom:${({ theme }) => theme.dim[1]};

`

export const StyledButton = styled.div`
display:inline-flex;
margin-right:auto;
`

export const StyledIcon = styled.span`
 color:${({ theme }) => theme.palette.onSurface};
`
export const StyledIconWrap = styled.div`
display:inline-flex;
justify-content:center;
align-items:center;
height:40px;
width:40px;
border-radius:50%;
border:1px solid ${({ theme }) => theme.palette.onSurface};
margin-left:${({ theme }) => theme.dim[2]};

`

export const StyledText = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.onSurface};
 ${({ theme }) => theme.typography.bodyLgBold};
`

export const StyledDate = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.onSurface};
 ${({ theme }) => theme.typography.subtitleXsNormal};
`

export const StyledTitle = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.onSurface};
 ${({ theme }) => theme.typography.bodyLgBold};
 margin-right:${({ theme }) => theme.dim[7]};
`

export const StyledDescription = styled.p`
 display:inline-flex;
 color:${({ theme }) => theme.palette.onSurface};
 ${({ theme }) => theme.typography.bodyMdNormal};
 margin-right:${({ theme }) => theme.dim[7]};
 line-height:2.4;
`