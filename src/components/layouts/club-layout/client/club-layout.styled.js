import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  direction: ${({ theme }) => theme.defaults.direction};
`;

const Container = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.dim[4]} ${({ theme }) => theme.defaults.screenSideDim};
`;

const Layout = styled.div`
  display: flex;
  max-width: 1600px;
  margin: 0 auto;
`;

const CardWrapper = styled.div`
  align-self: flex-start;
  margin-left: ${({ theme }) => theme.dim[4]};
  flex: 0 0 23.5%;
  position:sticky;
  top:0;
`;

const MainWrapper = styled.div`
 flex:1;
 min-width:0;
`;

export { Wrapper, Container, CardWrapper, MainWrapper, Layout };
