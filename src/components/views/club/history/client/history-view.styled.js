import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding: ${({ theme }) => theme.dim[4]} ${({ theme }) => theme.defaults.screenSideDim};
`;

export const StyledLayout = styled.section`
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
`;

export const StyledContainer = styled.div`
  display: flex;
  margin:0 -${({theme})=>theme.dim[2]};
`;
