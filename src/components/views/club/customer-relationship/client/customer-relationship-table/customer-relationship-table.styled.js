import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
 flex:1;
`;
export const StyledTitle = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.headline2}
  color:${({ theme }) => theme.palette.onSurface};
`;

export const StyledContent = styled.div`
  display: flex;
  flex-flow: column;
`;

export const StyledText = styled.div`
  display: inline-block;
  ${({ theme }) => theme.typography.bodyMdNormal};
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
`;

export const StyledContainer=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:${({theme})=>theme.dim[3]};
`
export const StyledSubText=styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.subtitleXsNormal}
  color:${({ theme }) => theme.palette.subtitle};
`
export const StyledDetail=styled.div`
display:flex;
flex-flow:column;
&:first-child{
    flex: 1;
    min-width: 0;
}
&:last-child{
    min-width: 135px;
    }
`