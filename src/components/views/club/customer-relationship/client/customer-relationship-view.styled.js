import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
`;
export const StyledContent = styled.div`
  margin-right:${({theme})=>theme.dim[4]};
  flex: 0 0 31.5%;
  min-width:0;
  align-self: flex-start;
`;
