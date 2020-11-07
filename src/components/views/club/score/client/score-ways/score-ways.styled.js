import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
`;

export const StyledContainer = styled.div`
  flex: 0 0 48.17%;
  min-width: 0;
`;

export const StyledDetail = styled.div`
  display: flex;
  flex-wrap:wrap;
  flex:1;
`;

export const StyledContent = styled.div`
  display:flex;
  flex-direction:column;
  flex: 0 0 51.83%;
  min-width: 0;
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
