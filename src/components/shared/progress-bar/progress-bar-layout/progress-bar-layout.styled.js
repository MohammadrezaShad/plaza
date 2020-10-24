import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 1px;
  width:100%;
  background: ${({ theme }) => theme.palette.stroke};
`;

export const StyledFill = styled.div`
  position: absolute;
  bottom: -1px;
  left:0;
  width:${({progressPrecentage})=> progressPrecentage ? progressPrecentage:0};
  background:${({ theme }) => theme.palette.success};
  height:2px;
`;
