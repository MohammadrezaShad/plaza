import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledHoverIconWrap = styled.div`
 opacity:0;
 visibility:hidden;
 position:absolute;
 top:${({ theme, $specialOffer, $specialSale }) =>
    $specialOffer || $specialSale ? theme.dim[4] : theme.dim[3]};
 right:${({ theme }) => theme.dim[3]};
 display:flex;
 flex-flow:column;
 transition-property: visibility, opacity;
 transition: 0s visibility, 0.5s opacity;
 transition-delay:0s 0s; 
`

export const StyledWrapper = styled.li`
  flex:${({ $mask }) => $mask ? `0 0 100%` : `0 0 25%`} ;
  position:relative;
  transition:all .3s;
  ${({ paddingStatus }) => {
    if (paddingStatus) {
      return css`
        padding:${({ theme, itemPaddingUnit }) => itemPaddingUnit.length ?
          `${theme.dim[itemPaddingUnit[0]]} ${theme.dim[itemPaddingUnit[1]]}` : theme.dim[3]};

      `
    }
  }}
    ${({ hoverable }) => {
    if (hoverable) {
      return css`
      &:hover{
        box-shadow: 0 0 20px rgba(0,0,0,.1);
        z-index:10;
        ${StyledHoverIconWrap}{
          transition-delay:.3s 0s; 
          opacity:1;
          visibility:visible;
        }
      }
      `
    }
  }}
  text-align: center;
  margin-right: ${({ theme, $border }) => $border ? '-2px' : '0'};
  margin-top: ${({ theme, $border }) => $border ? '-2px' : '0'};
  background-color:${({ theme }) => theme.palette.back};
  border:${({ theme, $border }) => $border ? `1px solid ${theme.palette.strokeVariant}` : 'none'};
  border-radius:${({ theme }) => theme.defaults.borderRadius};
  ${({ theme }) => theme.breakPoints.desktop}{
  flex:${({ $mask }) => $mask ? `0 0 100%` : `0 0 33.33%`} ;
  };
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledContent = styled.div``;

export const StyledColors = styled.div`
  margin-top: ${({ theme }) => theme.dim[1]};
  text-align:${({ $alignRight }) => $alignRight ? 'right' : 'center'};
`;

export const StyledImgWrapper = styled.div`
  padding:0 ${({ theme, imgPaddingUnit }) => imgPaddingUnit ? theme.dim[imgPaddingUnit] : theme.dim[4]};
  margin-bottom: ${({ theme }) => theme.dim[3]};
`;

export const StyledTitle = styled(Link)`
  display: block;
  text-decoration: none;
  text-align:${({ $alignRight }) => $alignRight ? 'right' : 'center'};
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onSurface};
  margin-bottom: ${({ theme }) => theme.dim[4]};
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledGilMark = styled.div`
position:absolute;
left:0;
right:0;
bottom:0;
display:flex;
align-items:center;
border-top:1px solid ${({ theme }) => theme.palette.strokeVariant};
margin-top:${({ theme }) => theme.dim[2]};
padding:0 ${({ theme }) => theme.dim[3]};
height:40px;
text-align:right;

`

export const StyledGilMarkText = styled.span`
display:inline-flex;
color:${({ theme }) => theme.palette.onSurface};
${({ theme }) => theme.typography.bodySmNormal};
margin-right:${({ theme }) => theme.dim[1]};
`

export const StyledSpecialWrap = styled.div`
position:absolute;
left:0;
right:0;
top:0;
display:flex;
align-items:center;
justify-content:center;
height:40px;
padding:0 ${({ theme }) => theme.dim[3]};
`

export const StyledSpecialText = styled.span`
display:inline-flex;
align-items:center;
justify-content:center;
color:${({ theme }) => theme.palette.onSurface};
${({ theme }) => theme.typography.bodyMdNormal};
margin-right:${({ theme }) => theme.dim[1]};
`

export const StyledSpecialIcon = styled.span`
color:${({ theme, $specialOffer, specialSale }) => $specialOffer ? theme.palette.error : theme.palette.primary};
`

export const StyledSpecialLayout = styled.span`
display:inline-flex;
position:relative;
height:2px;
flex:1;
background-color:${({ theme, $specialOffer, specialSale }) =>
    $specialOffer ? theme.palette.error : theme.palette.primary};
margin:0 ${({ theme }) => theme.dim[1]};
&:first-child{
  &::before{
    position:absolute;
    content:'';
    height:4px;
    width:4px;
    border:${({ theme, $specialOffer, specialSale }) =>
    $specialOffer ? `2px solid ${theme.palette.error}` : `2px solid ${theme.palette.primary}`};
    transform: rotate(45deg);
    right: -8px;
    top: -3px;
  }
}
&:last-child{
  &::before{
    position:absolute;
    content:'';
    height:4px;
    width:4px;
    border:${({ theme, $specialOffer, $specialSale }) =>
    $specialOffer ? `2px solid ${theme.palette.error}` : `2px solid ${theme.palette.primary}`};
    transform: rotate(45deg);
    left: -8px;
    top: -3px;
  }
}
`



export const StyledHoverIcon = styled.span`
 &:first-child{
   margin-bottom:${({ theme }) => theme.dim[2]};
 }
`