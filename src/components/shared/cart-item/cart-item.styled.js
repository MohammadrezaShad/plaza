import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledWrapper = styled.div`
 display:flex;
 width:100%;
 max-width:1192px;
 background-color:${({ theme }) => theme.palette.back};
 padding:${({ theme }) => theme.dim[4]};
 margin:0 -${({ theme }) => theme.dim[2]};

`

export const StyledImgWrap = styled.div`
 flex:0 0 18.78%;
 padding:0 ${({ theme }) => theme.dim[2]};
`

export const StyledImgContainer = styled.div`
    display: block;
    width: 100%;
    padding-top: 100%;
    position: relative;
`

export const StyledImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const StyledContent = styled.div`
 padding:0 ${({ theme }) => theme.dim[2]};
 flex:1;
`

export const StyledHead = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin-bottom:${({ theme }) => theme.dim[2]};
`

export const StyledTitle = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.onSurface};
 ${({ theme }) => theme.typography.bodyLgBold};
 margin-left:${({ theme }) => theme.dim[2]};
`

export const StyledTextWrap = styled.div`
   display:flex;
   align-items:center;
`

export const StyledDetail = styled.div`
 ${StyledTextWrap}{
     &:not(:first-child){
         margin-top:${({ theme }) => theme.dim[1]};
     }
 }
`



export const StyledButtonWrap = styled.div`
 margin-right:${({ theme }) => theme.dim[2]};
`

export const StyledContainer = styled.div`
 display:flex;
 align-items:center;
 margin-left:${({ theme }) => theme.dim[2]};
 ${StyledButtonWrap}{
    margin:0 ${({ theme }) => theme.dim[2]};

    &:last-child{
        margin-right:${({ theme }) => theme.dim[2]};
    }
}
`

export const StyledText = styled.span`
 display:inline-flex;
 ${({ theme }) => theme.typography.bodyMdNormal};
 color:${({ theme }) => theme.palette.onSurface};

`

export const StyledTextBold = styled.span`
 display:inline-flex;
 ${({ theme }) => theme.typography.bodyLgBold};
 color:${({ theme }) => theme.palette.onSurface};
`

export const StyledLink = styled(Link)`
  display:inline-flex;
  text-decoration:none;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color:${({ theme }) => theme.palette.secondary};
`

export const StyledBottom = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding-top:${({ theme }) => theme.dim[3]};
 margin-top:${({ theme }) => theme.dim[3]};
 border-top:1px solid ${({ theme }) => theme.palette.strokeVariant};
`

export const StyledColor = styled.span`
 display:inline-flex;
 background-color:${({ theme }) => theme.palette.nero};
 height:24px;
 width:24px;
 border-radius:50%;
 margin-left:${({ theme }) => theme.dim[1]};
`

export const StyledButton = styled.button`
    width:40px;
    height:40px;
    border-radius:${({ theme }) => theme.defaults.borderRadius};
    display:inline-flex;
    align-items:center;
    justify-content:center;
    color:${({ theme }) => theme.palette.onBack};
    background-color:${({ theme }) => theme.palette.surface};
    cursor:pointer;
`

export const StyledIcon = styled.span`
  color:${({ theme }) => theme.palette.onSurface};
`