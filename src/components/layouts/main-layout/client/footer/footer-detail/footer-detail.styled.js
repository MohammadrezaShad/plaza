import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as FooterLogo } from "../../../../../../assets/images/logo.svg";

const Enamad = styled.div`
  display: flex;
  margin-left: ${({ theme }) => theme.dim[7]};
  height: 100%;
  align-self: flex-start;
  & > div:not(:first-child) {
    margin-right: ${({ theme }) => theme.dim[4]};
  }
`;

const EnamadLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 200px;
`;

const EnamadLogo = styled.img`
  display: inline-flex;
`;

const Description = styled.div``;

const DescriptionLink = styled(Link)`
  display: flex;
  margin-bottom: ${({ theme }) => theme.dim[3]};
`;

const Logo = styled(FooterLogo)`
  & path {
    fill: ${({ theme }) => theme.palette.disabled};
  }
`;
const Text = styled.p`
  display: flex;
  text-align: justify;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodySmNormal};
`;

export { Enamad, EnamadLink, EnamadLogo, Description, DescriptionLink, Logo, Text };
