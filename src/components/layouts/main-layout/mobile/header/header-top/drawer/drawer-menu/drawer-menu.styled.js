import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  right: ${({ showDrawer }) => (showDrawer ? "0" : "-9999px")};
  top: 0;
  bottom: 0;
  width: 100%;
  transition: ${({ showDrawer }) => (showDrawer ? "transition: 0.01s right 0s" : "0.01s right 0.3s")};
`;

export const StyledBackDrop = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.6);
  transform-origin: 0% 0%;
  transform: ${({ showDrawer }) => (showDrawer ? "translate(0, 0)" : "translate(100%, 0)")};
  transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
`;
