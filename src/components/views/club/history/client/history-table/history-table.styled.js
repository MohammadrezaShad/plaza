import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  width: 100%;
`;

export const StyledContent = styled.div``;

export const StyledEmpty = styled.div`
  text-align: center;
  display: none;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.dim[2]};
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.headline2}
  color:${({ theme }) => theme.palette.onSurface};
  margin-bottom: ${({ theme }) => theme.dim[6]};
`;

export const StyledPersuasivePoint = styled.span`
  display: inline-block;
  ${({ theme }) => theme.typography.bodyMdNormal};
`;

export const StyledScore = styled.span`
  display: inline-block;
  direction: ltr;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme, score }) => (score >= 0 ? theme.palette.primary : theme.palette.onSurface)};
`;

export const StyledDetail = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledPointTitle = styled.span`
  ${({ theme }) => theme.typography.bodyMdNormal};
  display: block;
`;

export const StyledPointSubTitle = styled.span`
  display: block;
  color: ${({ theme }) => theme.palette.subtitle};
  ${({ theme }) => theme.typography.buttonXsNormal};
`;

export const StyledDate = styled.span`
  display: inline-block;
  ${({ theme }) => theme.typography.bodyMdNormal};
  margin-left:${({theme})=>theme.dim[1]};
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  cursor:pointer;
`;

export const StyleBadgedLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-align:left;
  cursor:pointer;
  button{
    margin-right:auto;
  }
`;
