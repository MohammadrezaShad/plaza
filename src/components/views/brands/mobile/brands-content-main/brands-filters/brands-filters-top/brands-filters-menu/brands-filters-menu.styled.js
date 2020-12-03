import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  padding-top: ${({ theme }) => theme.dim[6]};
  padding-bottom: ${({ theme }) => theme.dim[7]};
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.filters};
  opacity: ${({ showFilters }) => (showFilters ? 1 : 0)};
  visibility: ${({ showFilters }) => (showFilters ? "visible" : "hidden")};
  transition: ${({ showFilters }) =>
    showFilters
      ? "visibility 0s,opacity .3s"
      : "0s visibility .3s,opacity .3s"};
`;

export const StyledLayout = styled.div`
  height: 100%;
  overflow: scroll;
  background: ${({ theme }) => theme.palette.back};
`;

export const StlyedContent = styled.div`
  padding: 0 ${({ theme }) => theme.dim[2]};
`;

export const StyledHead = styled.div`
  position: sticky;
  background-color: ${({ theme }) => theme.palette.back};
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.dim[2]};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
  z-index: 1;
`;

export const StyledHeadText = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.onSurface};
  ${({ theme }) => theme.typography.bodyLgBold};
`;

export const StyledIcon = styled.span`
  color: ${({ theme }) => theme.palette.onSurface};
`;

export const StyledBlock = styled.div`
  display: flex;
  flex-flow: column;
  padding-top: ${({ theme }) => theme.dim[3]};
  padding-bottom: ${({ theme }) => theme.dim[2]};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
`;

export const StyledSpecialBlock = styled.div`
  display: flex;
  flex-flow: column;
  padding-top: ${({ theme }) => theme.dim[2]};
  padding-bottom: ${({ theme }) => theme.dim[2]};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
  & > label {
    &:first-child {
      margin-bottom: ${({ theme }) => theme.dim[2]};
    }
  }
`;

export const StyledButton = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 1;
  & > button {
    border-radius: 0;
  }
`;
