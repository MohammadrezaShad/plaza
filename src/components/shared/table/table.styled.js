import styled from "styled-components";

export const StyledTable = styled.div`
  display: table;
  border-collapse: collapse;
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
  white-space:nowrap;
  ${({ theme }) => theme.typography.bodyLgBold};
  padding-top: ${({ theme }) => theme.dim[3]};
  padding-bottom: ${({ theme }) => theme.dim[3]};
  width:${({$width})=>$width ? $width:'auto'};
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


