import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0 ${({ theme }) => theme.dim[2]};
  background-color: ${({ theme }) => theme.palette.ghostWhite};
  flex: 1;
`;

export const StyledLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.defaults.screenWideSize};
  width: 100%;
  margin: 0 auto;
  flex: 1;
  padding: 48px 0;
`;

export const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImg = styled.img`
  object-fit: cover;
`;
