import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const StyledContent = styled.div`
&:nth-child(2){
    padding: ${({ theme }) => theme.dim[6]} 0;
    margin:${({theme})=>theme.dim[4]} 0;
}
`

export const StyledIcon = styled.span`
color:${({ theme }) => theme.palette.onSurface};
 &:first-child{
     margin-left:${({ theme }) => theme.dim[4]};
 }
`

export const StyledImgWrapper = styled.div`
padding:0 ${({ theme }) => theme.dim[6]};
margin: 0 -2px;
`

export const StyledImgLink = styled(Link)`
    display: block;
    width: 100%;
    padding-top: 26.4%;
    position: relative;
`

export const StyledImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const StyledTitle = styled.span`
display:flex;
justify-content:center;
margin-bottom:${({ theme }) => theme.dim[6]};
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
`

export const StyledPrcentage = styled.span`
 display:inline-flex;
 ${({ theme }) => theme.typography.bodyMdNormal};
 color:${({ theme }) => theme.palette.onSurface};
 margin-left:${({ theme }) => theme.dim[1]};
 line-height:1;
 margin-top:${({ theme }) => theme.dim[1]};
`


export const StyledConsent = styled.div`
display:inline-flex;
align-items:center;
`

export const StyledIconWrap=styled.span`
display:inline-flex;
width:16px;
height:16px;
border-radius:50%;
align-items:center;
justify-content:center;
border:1px solid ${({theme})=>theme.palette.disabled};
 margin-right:${({ theme }) => theme.dim[1]};

`
export const StyledConsentIcon = styled.span`
color:${({theme})=>theme.palette.disabled};
`