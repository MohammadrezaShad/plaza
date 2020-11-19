import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  flex-shrink: 0;
  &:not(:first-child) {
    margin-right: ${({ theme }) => theme.dim[4]};
  }
  ${({ theme }) => theme.breakPoints.mobileMd} {
    margin-right: 0 !important;
    flex-basis: 100%;
    &:not(:first-child){
      margin-top:${({theme})=>theme.dim[2]};
    }
  }
`;

export const StyledLogo = styled.img`
  display: inline-flex;
`;
