import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  width: 25%;
  padding: 0 ${({ theme }) => theme.dim[2]};
  text-align: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  padding: ${({ theme,specialOffer }) =>specialOffer ? theme.dim[4]:theme.dim[3]};
  height: 100%;
`;

export const StyledContent = styled.div``;

export const StyledColors = styled.div`
  margin-top: ${({ theme }) => theme.dim[2]};
`;

export const StyledImgWrapper = styled.div`
  padding:${({ specialOffer }) =>specialOffer ? '0 41px':'0 69px'};
  margin-bottom: ${({ theme }) => theme.dim[3]};
`;

export const StyledTitle = styled(Link)`
  display: block;
  text-decoration: none;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onSurface};
  margin-bottom: ${({ theme }) => theme.dim[3]};
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
