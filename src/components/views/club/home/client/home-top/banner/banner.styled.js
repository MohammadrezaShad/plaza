import styled from "styled-components";
import BannerGraphicImg from "../../../../../../../assets/images/club/bannerGraphic.png";

export const StyledWrapper = styled.div`
  flex: 1;
`;

export const StyledContainer = styled.div`
  display: block;
  width: 100%;
  padding-top: 50%;
  position: relative;
  height: 100%;
  background-image:url(${BannerGraphicImg});
  background-repeat:no-repeat;
  background-position:right bottom;
`;

export const StyledImg = styled.img`
  position: absolute;
  z-index:-1;
  object-fit:cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledHashtag = styled.span`
  display: inline-flex;
  align-items: center;
  position: absolute;
  right: 4%;
  bottom: 7.8%;
`;

export const StyledHashtagIcon = styled.span`
  color: ${({ theme }) => theme.palette.onSurface};
`;
export const StyledHashtagText = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.subtitleXsNormal};
  margin-right: 4px;
`;
export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 4%;
  top: 7.8%;
`;
export const StyledDetail = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 289px;
  margin-right: ${({ theme }) => theme.dim[4]};
`;
export const StyledText = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.body2XLgBold};
`;

export const StyledSubText = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyMdNormal};
`;

export const StyledIcon = styled.span`
  color: ${({ theme }) => theme.palette.onSurface};
`;
