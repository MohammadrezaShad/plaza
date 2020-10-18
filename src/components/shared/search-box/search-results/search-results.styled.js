import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${({ theme }) => theme.palette.back};
  border-right: 1px solid ${({ theme,mobile }) =>mobile ? 'transparent':theme.palette.stroke};
  border-bottom: 1px solid ${({ theme,mobile }) => mobile ? 'transparent':theme.palette.stroke};
  border-left: 1px solid ${({ theme,mobile }) => mobile ? 'transparent':theme.palette.stroke};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  top:${({mobile})=>mobile ? '99%':'95%'};
`;

const Container = styled.div`
  margin: 0 ${({theme,mobile})=>mobile ? 0:theme.dim[2]};
  padding: ${({theme})=>theme.dim[2]} 0;
  height: 100%;
  background: ${({ theme }) => theme.palette.back};
  border-top: 1px solid ${({ theme }) => theme.palette.surface};
`;

export { 
  Wrapper,
  Container
};
