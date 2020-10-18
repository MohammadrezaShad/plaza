import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: right;
  padding: ${({ theme }) => theme.dim[2]} ${({ theme }) => theme.dim[1]};
  border: 1px solid ${({ theme }) => theme.palette.strokeVariant};
  flex: 1;
  flex-basis: 50%;
  text-decoration:none;
  &:first-child {
    margin-left: ${({ theme }) => theme.dim[2]};
  }
`;

export const StyledIcon = styled.span`
  display: inline-flex;
  margin-left: ${({ theme }) => theme.dim[1]};
  color:${({theme})=>theme.palette.primary};
`;

export const StyledText = styled.span`
    display: inline-flex;
    ${({theme})=>theme.typography.bodySmNormal};
    white-space: nowrap;
    color:${({theme})=>theme.palette.onSurface};
`;
