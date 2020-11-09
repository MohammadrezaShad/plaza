import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledContainer = styled.div`
  flex: 0 0 48.17%;
  min-width: 0;
`;

export const StyledDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  &:last-child {
    margin-top: ${({ theme }) => theme.dim[2]};
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 51.83%;
  min-width: 0;
  position: relative;
`;

export const StyledImgWrap = styled.div`
  display: block;
  width: 100%;
  padding-top: 109%;
  position: relative;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.headline1};
  color: ${({ theme }) => theme.palette.onSurface};
  margin-bottom: ${({ theme }) => theme.dim[1]};
`;

export const StyledText = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onSurface};
`;

export const StyledTooltipWrap = styled.div`
  padding: ${({ theme }) => theme.dim[2]};
`;

export const StyledItem = styled.span`
  display: flex;
  ${({ theme }) => theme.typography.bodyMdNormal};
`;

export const StyledButtonWrap = styled(Link)`
  display: flex;
  justify-content:center;
  width: 126px;
  text-decoration: none;
  margin-top:${({theme})=>theme.dim[1]};
`;
