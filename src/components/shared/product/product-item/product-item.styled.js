import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.li`
  flex:0 0 25%;
  padding: 0 ${({ theme }) => theme.dim[3]};
  text-align: center;
  ${({theme})=>theme.breakPoints.desktop}{
    flex:0 0 33.33%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledContent = styled.div``;

export const StyledColors = styled.div`
  margin-top: ${({ theme }) => theme.dim[2]};
`;

export const StyledImgWrapper = styled.div`
  padding:0 ${({ theme }) => theme.dim[4]};
  margin-bottom: ${({ theme }) => theme.dim[4]};
`;

export const StyledTitle = styled(Link)`
  display: block;
  text-decoration: none;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onSurface};
  margin-bottom: ${({ theme }) => theme.dim[6]};
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
