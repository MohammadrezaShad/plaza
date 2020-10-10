import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${({ theme }) => theme.palette.back};
  border-right: 1px solid ${({ theme }) => theme.palette.stroke};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
  border-left: 1px solid ${({ theme }) => theme.palette.stroke};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  top: 95%;
`;

const Container = styled.div`
  margin: 0 16px;
  padding: 16px 0;
  height: 100%;
  background: ${({ theme }) => theme.palette.back};
  border-top: 1px solid ${({ theme }) => theme.palette.surface};
`;

export { 
  Wrapper,
  Container
};
