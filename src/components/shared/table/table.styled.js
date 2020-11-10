import styled from "styled-components";

export const StyledTable = styled.div`
  display: table;
  border-collapse: separate;
  width: 100%;
`;

export const StyledTableCell = styled.div`
  display: table-cell;
  position: relative;
  vertical-align: middle;
  padding-top: ${({ theme }) => theme.dim[2]};
  padding-bottom: ${({ theme }) => theme.dim[2]};
  &:not(:last-child) {
    padding-left: ${({ theme }) => theme.dim[1]};
  }
  &:first-child {
    padding-right: ${({ theme }) => theme.dim[4]};
  }
  &:last-child {
    padding-left: ${({ theme }) => theme.dim[4]};
  }
`;

export const StyledTableHeadCell = styled.div`
  display: table-cell;
  vertical-align: middle;
  white-space: nowrap;
  ${({ theme }) => theme.typography.bodyLgBold};
  padding-top: ${({ theme }) => theme.dim[3]};
  padding-bottom: ${({ theme }) => theme.dim[3]};
  width: ${({ $width }) => ($width ? $width : "auto")};
  border-top: 1px solid ${({ theme }) => theme.palette.stroke};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};

  &:not(:last-child) {
    padding-left: ${({ theme }) => theme.dim[1]};
  }
  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.palette.stroke};
    border-top-right-radius: ${({ theme }) => theme.defaults.borderRadius};
    border-bottom-right-radius: ${({ theme }) => theme.defaults.borderRadius};
    padding-right: ${({ theme }) => theme.dim[4]};
  }
  &:last-child {
    border-left: 1px solid ${({ theme }) => theme.palette.stroke};
    border-top-left-radius: ${({ theme }) => theme.defaults.borderRadius};
    border-bottom-left-radius: ${({ theme }) => theme.defaults.borderRadius};
    padding-left: ${({ theme }) => theme.dim[4]};
  }
`;

export const StyledTableHead = styled.div`
  display: table-row;
  border: 1px solid ${({ theme }) => theme.palette.stroke};
`;

export const StyledTableRow = styled.div`
  display: table-row;
  position: relative;
  &:not(:last-child) {
    ${StyledTableCell} {
      &:after {
        content: "";
        position: absolute;
        border-bottom: 1px solid ${({ theme }) => theme.palette.strokeVariant};
        left: 0;
        bottom: 0;
        height: 1px;
        right: 0;
      }
      &:first-child {
        &:after {
          right: ${({ theme }) => theme.dim[4]};
        }
      }
      &:last-child {
        &:after {
          left: ${({ theme }) => theme.dim[4]};
        }
      }
    }
  }
`;
