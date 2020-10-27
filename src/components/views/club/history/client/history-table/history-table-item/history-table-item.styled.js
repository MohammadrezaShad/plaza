import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  display: flex;
  margin: 0 ${({ theme }) => theme.dim[4]};
  padding: ${({ theme }) => theme.dim[2]} 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.strokeVariant};
  }
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyMdNormal};
  &:not(:first-child) {
    margin-right: ${({ theme }) => theme.dim[1]};
  }
  &:nth-child(1) {
    flex: 0 0 9%;
  }
  &:nth-child(2) {
    flex: 0 0 23.9%;
  }
  &:nth-child(3) {
    flex: 0 0 14.5%;
  }
  &:nth-child(4) {
    flex: 0 0 30.7%;
  }
  &:nth-child(5) {
    margin-right: auto;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledScore = styled.span`
  display: inline-flex;
  direction: ltr;
  justify-content: flex-end;
  color: ${({ theme, score }) => (score >= 0 ? theme.palette.primary : theme.palette.onSurface)};
`;

export const StyledTitle = styled.span`
  display: inline-flex;
`;

export const StyledSubTitle = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.subtitle};
  ${({ theme }) => theme.typography.buttonXsNormal};
`;

export const StyledStatus = styled.span`
  display: inline-flex;
`;

export const StyledDate = styled.span`
  display: inline-flex;
  margin-left: ${({ theme }) => theme.dim[1]};
`;

