import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.palette.back};
  left: 0;
  right: 0;
  bottom:${({showProfile})=>showProfile ? '0':'-999px'};
  transition: 0.5s bottom;
  box-shadow: 0px -19px 26px 0px rgba(0, 0, 0, 0.08);
  padding: ${({ theme }) => theme.dim[3]} 0;
`;

export const StyledHeader = styled.div`
  position:relative;
  display: flex;
  align-items: center;
  margin: 0 ${({ theme }) => theme.dim[2]};
  margin-bottom:${({ theme }) => theme.dim[3]};
  padding-bottom: ${({ theme }) => theme.dim[2]};
  border-bottom: 1px solid ${({ theme }) => theme.palette.strokeVariant};
`;

export const StyledContent=styled.div`
 padding:0 ${({theme})=>theme.dim[3]};
`

export const StyledIcon = styled.span`
  position: absolute;
  top:16px;
  left:8px;
  color: ${({ theme }) => theme.palette.onSurface};
`;
