import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledHoverIconWrap = styled.div`
  opacity: ${({ hover }) => (hover ? "1" : "0")};
  visibility: ${({ hover }) => (hover ? "visable" : "hidden")};
  position: absolute;
  top: ${({ theme, $specialOffer, $specialSale }) =>
    $specialOffer || $specialSale ? theme.dim[4] : theme.dim[3]};
  right: ${({ theme }) => theme.dim[3]};
  display: flex;
  flex-flow: column;
  transition-property: visibility, opacity;
  transition: 0s visibility, 0.5s opacity;
  transition-delay: ${({ hover }) => (hover ? ".3s 0s" : "0s 0s")};
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledContent = styled.div``;

export const StyledColors = styled.div`
  margin-top: ${({ theme }) => theme.dim[1]};
  text-align: ${({ $alignRight }) => ($alignRight ? "right" : "center")};
`;

export const StyledImgWrapper = styled.div`
  width: ${({ imgWidth }) => imgWidth};
  margin: 0 auto ${({ theme }) => theme.dim[3]} auto;
`;

export const StyledTitle = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: ${({ $alignRight }) => ($alignRight ? "right" : "center")};
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onSurface};
  margin-bottom: ${({ theme }) => theme.dim[4]};
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

export const StyledGilMark = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.palette.strokeVariant};
  margin-top: ${({ theme }) => theme.dim[2]};
  padding: 0 ${({ theme }) => theme.dim[3]};
  height: 40px;
  text-align: right;
`;

export const StyledGilMarkText = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodySmNormal};
  margin-right: ${({ theme }) => theme.dim[1]};
`;

export const StyledSpecialWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 ${({ theme }) => theme.dim[3]};
`;

export const StyledSpecialText = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyMdNormal};
  margin-right: ${({ theme }) => theme.dim[1]};
`;

export const StyledSpecialIcon = styled.span`
  color: ${({ theme, $specialOffer, specialSale }) =>
    $specialOffer ? theme.palette.error : theme.palette.primary};
`;

export const StyledSpecialLayout = styled.span`
  display: inline-flex;
  position: relative;
  height: 2px;
  flex: 1;
  background-color: ${({ theme, $specialOffer, specialSale }) =>
    $specialOffer ? theme.palette.error : theme.palette.primary};
  margin: 0 ${({ theme }) => theme.dim[1]};
  &:first-child {
    &::before {
      position: absolute;
      content: "";
      height: 4px;
      width: 4px;
      border: ${({ theme, $specialOffer, specialSale }) =>
        $specialOffer
          ? `2px solid ${theme.palette.error}`
          : `2px solid ${theme.palette.primary}`};
      transform: rotate(45deg);
      right: -8px;
      top: -3px;
    }
  }
  &:last-child {
    &::before {
      position: absolute;
      content: "";
      height: 4px;
      width: 4px;
      border: ${({ theme, $specialOffer, $specialSale }) =>
        $specialOffer
          ? `2px solid ${theme.palette.error}`
          : `2px solid ${theme.palette.primary}`};
      transform: rotate(45deg);
      left: -8px;
      top: -3px;
    }
  }
`;

export const StyledHoverIcon = styled.span`
  &:first-child {
    margin-bottom: ${({ theme }) => theme.dim[2]};
  }
`;

export const StyledItemDetail = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  justify-content: ${({ $alignRight }) => ($alignRight ? "right" : "center")};
`;
