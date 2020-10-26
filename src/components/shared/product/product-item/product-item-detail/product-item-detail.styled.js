import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: ${({ theme }) => theme.dim[2]};
  justify-content:center;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: ${({ theme }) => theme.dim[2]};
  position: relative;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  text-decoration: none;
`;

export const StyledPoint = styled.span`
  display: inline-flex;
  position: absolute;
  right: 0;
  top: -22px;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.subtitle};
`;

export const StyledPrice = styled.span`
  display: inline-flex;
  position: absolute;
  right: 0;
  top: -14px;
  ${({ theme }) => theme.typography.subtitleXsNormal};
  color: ${({ theme }) => theme.palette.subtitle};
  text-decoration:line-through;
`;

export const StyledOffPrice = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.primary};
  ${({ theme }) => theme.typography.bodyLgBold};
`;

export const StyledCurrency = styled.span`
  display: inline-flex;
  margin-right: ${({ theme }) => theme.dim[1]};
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyMdNormal};
`;


export const StyledDetail=styled.div`
  position: relative;

`