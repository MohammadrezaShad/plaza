import styled from "styled-components";

export const StyledWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  border-bottom:1px solid ${({theme})=>theme.palette.stroke};
`;

