import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: ${({ theme }) => theme.dim[2]};
  cursor: pointer;
`;

export const  StyledContainer=styled.div`
  display: inline-flex;
  align-items: center;
  height:17px;
`
export const StyledLayout = styled.span`
  display: inline-block;
  position: relative;
  height: 1.63px;
  width: 2rem;
  background: ${({ theme }) => theme.palette.onSurface};
  &:before{
    content: "";
    position: absolute;
    height: 1.63px;
    width: 100%;
    background: ${({ theme }) => theme.palette.onSurface};
    top: -6px;
  }
  &:after{
    content: "";
    position: absolute;
    height: 1.63px;
    width: 100%;
    background: ${({ theme }) => theme.palette.onSurface};
    bottom: -6px;
  }
`;
