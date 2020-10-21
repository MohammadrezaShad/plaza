import styled from "styled-components";

export const StyledWrapper = styled.div`
  display:flex;
  align-items:center;
  padding: ${({ theme }) => theme.dim[1]} ${({ theme }) => theme.defaults.screenSideDim};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
  height:56px;
`;

export const StyledLayout = styled.div`
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
  display:flex;
  width:100%;
  align-items:center;
`;

export const StyledLogo = styled.span`
  color: ${({ theme }) => theme.palette.onSurface};
  margin-left:${({theme})=>theme.dim[2]};
`;

export const StyledTitle = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.headline1};
  color: ${({ theme }) => theme.palette.onSurface};
`;
