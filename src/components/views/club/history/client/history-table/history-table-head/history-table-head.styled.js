import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  padding: ${({ theme }) => theme.dim[3]} ${({ theme }) => theme.dim[4]};
`;

export const StyledHead = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyLgBold};
  white-space: nowrap;
  &:not(:first-child) {
    margin-right: ${({ theme }) => theme.dim[1]};
  }
  &:nth-child(1) {
    flex: 0 0 9%;
  }
  &:nth-child(2) {
    flex: 0 0 23.9%;
  }
  &:nth-child(3) {
    flex: 0 0 14.5%;
  }
  &:nth-child(4) {
    flex: 0 0 30.7%;
  }
  &:nth-child(5) {
    margin-right: auto;
  }
`;
