import styled from "styled-components";

export const StyledWrapper = styled.div`
  flex:0 0 50%;
  padding:0 ${({theme})=>theme.dim[2]};
`;

export const StyledContainer = styled.div`
  display: block;
  width: 100%;
  padding-top: 50%;
  position: relative;
  height:100%;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
