import styled from "styled-components";
import { Link } from 'react-router-dom'

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0 ${({ theme }) => theme.dim[2]};
  background-color: ${({ theme }) => theme.palette.ghostWhite};
  flex: 1;
`;

export const StyledLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.defaults.screenWideSize};
  width: 100%;
  margin: 0 auto;
  flex: 1;
  padding: 48px 0;
  flex-flow:column;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImg = styled.img`
  object-fit: cover;
`;

export const StyledText=styled.span`
  display:inline-flex;
  justify-content:center;
  ${({theme})=>theme.typography.headline1};
  line-height:2;
  color:${({theme})=>theme.palette.onSurface};
`

export const StyledHint=styled.span`
  display:inline-flex;
  justify-content:center;
  ${({theme})=>theme.typography.bodyMdNormal};
  color:${({theme})=>theme.palette.onSurface};
  margin-bottom:${({theme})=>theme.dim[4]};
`

export const StyledLink=styled(Link)`
  display:inline-flex;
  justify-content:center;
 text-decoration:none;
`