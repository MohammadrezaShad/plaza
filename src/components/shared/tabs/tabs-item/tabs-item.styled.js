import styled from "styled-components";

export const StyledWrapper = styled.li`
  position: relative;
  padding-bottom: ${({ theme }) => theme.dim[1]};
  ${({ theme }) => theme.typography.bodyLgBold};
  color: ${({ theme }) => theme.palette.onSurface};
  cursor: pointer;
  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.dim[6]};
  }
  &::after {
    content: "";
    opacity: ${({ index, selectedTab }) => (index === selectedTab ? 1 : 0)};
    visibility: ${({ index, selectedTab }) => (index === selectedTab ? "visible" : "hidden")};
    transition: 0s visibility, 0.3s opacity;
    transition-delay: ${({ index, selectedTab }) => (index===selectedTab ? "0s , 0s" : ".3s , 0s")};
    position: absolute;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.primary};
    left: 0;
    right: 0;
    bottom: -1.5px;
  }
`;
