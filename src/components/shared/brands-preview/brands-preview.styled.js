import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const StyledContent = styled.div`

`

export const StyledIcon = styled.span`
color:${({ theme }) => theme.palette.onSurface};
 &:first-child{
     margin-left:${({ theme }) => theme.dim[4]};
 }
`

export const StyledImgWrapper = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 height:208px;
 margin:${({ theme }) => theme.dim[2]} 0;
`

export const StyledImgLink = styled(Link)`
 
`

export const StyledImg = styled.img`
  
`

export const StyledTitle = styled.span`
display:flex;
justify-content:center;
margin-bottom:${({ theme }) => theme.dim[4]};
${({ theme }) => theme.typography.bodyXLgBold};
color:${({ theme }) => theme.palette.onSurface};
`

export const StyledWrap = styled.span`
 display:flex;
 justify-content:space-between;
 align-items:center;
 &:first-child{
  margin-bottom:${({ theme }) => theme.dim[1]};
 }
`

export const StyledText = styled.span`
 display:inline-flex;
 ${({ theme }) => theme.typography.bodyMdNormal};
 color:${({ theme }) => theme.palette.onSurface};
 white-space:nowrap;
`

export const StyledPrcentage = styled.span`
 display:inline-flex;
 ${({ theme }) => theme.typography.bodyMdNormal};
 color:${({ theme }) => theme.palette.onSurface};
 margin-left:${({ theme }) => theme.dim[1]};
 line-height:1;
 margin-top:4px;
`


export const StyledConsent = styled.div`
display:inline-flex;
align-items:center;
margin-left:${({ theme }) => theme.dim[1]};

`

export const StyledIconWrap = styled.span`
display:inline-flex;
width:16px;
height:16px;
border-radius:50%;
align-items:center;
justify-content:center;
border:1px solid ${({ theme }) => theme.palette.disabled};
 margin-right:${({ theme }) => theme.dim[1]};

`
export const StyledConsentIcon = styled.span`
color:${({ theme }) => theme.palette.disabled};
`