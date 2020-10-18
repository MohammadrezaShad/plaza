import styled from "styled-components";

export const StyledContent = styled.div`
 cursor:pointer;
  &:not(:last-child){
    margin-left:${({theme})=>theme.dim[3]};
  }
`;

export const StyledIcon = styled.span`
  color: ${({ theme }) => theme.palette.onSurface};
`;