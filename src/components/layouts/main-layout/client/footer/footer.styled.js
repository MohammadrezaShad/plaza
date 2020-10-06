import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.footer`
  padding: 0 ${({ theme }) => theme.defaults.screenSideDim};
  border-top: 1px solid ${({ theme }) => theme.palette.stroke};
`;

const Layout = styled.section`
  max-width: ${({ theme }) => theme.defaults.screenWideSize};
  margin-right: auto;
  margin-left: auto;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.dim[4]} 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.strokeVariant};
  &:first-child {
    padding: ${({ theme }) => theme.dim[3]} 0;
  }
`;

const NavigationContent = styled(Content)`
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const BottomContent = styled(Content)`
  flex-flow: column;
  padding-bottom: ${({ theme }) => theme.dim[2]};
  border:none;
`;

const Button = styled(Link)`
  text-decoration: none;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onSurface};
  &:first-child {
    margin-left: ${({ theme }) => theme.dim[3]};
  }
`;

export { 
  Wrapper,
  Layout,
  Content,
  Button,
  NavigationContent,
  BottomContent
};
