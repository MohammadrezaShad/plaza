import styled, { keyframes } from "styled-components";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const StyledBlock = styled.div`
  margin-bottom: ${({ theme }) => theme.dim[2]};
`;

export const StyledTabWrap = styled.div``;

export const StyledFeedWrap = styled.div``;

export const StyledLoadingIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.dim[2]};
  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const StyledExpandButton = styled.div``;
