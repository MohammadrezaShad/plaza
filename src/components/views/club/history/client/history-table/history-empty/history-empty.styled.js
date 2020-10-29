import styled from "styled-components";
import { ReactComponent as EmptyBody } from "../../../../../../../assets/images/club/emptyBody.svg";
import { Link } from "react-router-dom";

export const StyledImg = styled(EmptyBody)``;

export const StyledContent = styled.div`
  text-align: center;
  max-width: 476px;
  margin: 0 auto;
  button {
    margin: 0 auto;
  }
`;

export const StyledTitle = styled.div`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyLgBold};
  color: ${({ theme }) => theme.palette.onSurface};
  margin-bottom: ${({ theme }) => theme.dim[2]};
  margin-top: ${({ theme }) => theme.dim[4]};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledText = styled.div`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.subtitle};
  margin-bottom: ${({ theme }) => theme.dim[4]};
`;
