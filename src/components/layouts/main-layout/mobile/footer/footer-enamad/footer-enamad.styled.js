import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 150px;
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  &:not(:first-child) {
    margin-right: ${({ theme }) => theme.dim[4]};
  }
`;

export const StyledLogo = styled.img`
  display: inline-flex;
`;
