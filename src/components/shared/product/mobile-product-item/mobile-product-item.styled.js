import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const StyledContainer = styled.div`
 display:flex;
 width:100%;
`

export const StyledImgWrap = styled(Link)`
 display:flex;
 align-items:center;
 flex:0 0 29.78%;
 padding:0 ${({ theme }) => theme.dim[1]};
`

export const StyledContent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
 padding:0 ${({ theme }) => theme.dim[1]};
 flex:1;
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

export const StyledTitle = styled(Link)`
  display: block;
  text-decoration: none;
  text-align:${({ $alignRight }) => $alignRight ? 'right' : 'center'};
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onSurface};
  margin-bottom: ${({ theme }) => theme.dim[4]};
  line-height:1.4;
`;

export const StyledItemDetail = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content:${({ $alignRight }) => $alignRight ? 'right' : 'center'};
`;


export const StyledColors = styled.div`
  margin-top: ${({ theme }) => theme.dim[1]};
  text-align:${({ $alignRight }) => $alignRight ? 'right' : 'center'};
`;