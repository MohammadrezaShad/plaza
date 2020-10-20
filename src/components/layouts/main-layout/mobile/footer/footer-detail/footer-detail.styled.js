import styled from "styled-components";
import { ReactComponent as FooterLogo } from "../../../../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLogo = styled(FooterLogo)`
  & path {
    fill: ${({ theme }) => theme.palette.disabled};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  margin-bottom: ${({ theme }) => theme.dim[3]};
`;

export const StyledContent = styled.div`
  text-align: center;
`;

export const StyledText = styled.p`
  text-align: justify;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodySmNormal};
  max-height:${({showMore})=>showMore ? '3000px':'46px'};
  transition:${({showMore })=>showMore ? ' max-height 1s ease-in-out':'max-height 0.5s cubic-bezier(0, 1, 0, 1)'} ;
  overflow:hidden;
`;

export const StyledButton = styled.span`
  color: ${({ theme }) => theme.palette.secondary};
  ${({ theme }) => theme.typography.subtitleXsNormal};
  cursor:pointer;
`;
