import styled from "styled-components";

const Wrapper = styled.div``;

const Title = styled.span`
  display: inline-flex;
  position: relative;
  ${({ theme }) => theme.typography.headline2};
  color: ${({ theme }) => theme.palette.onSurface};
  padding-right: 12px;
  &:before {
    content: "";
    position: absolute;
    right: 0;
    top: 6px;
    background-color: ${({ theme }) => theme.palette.primary};
    width: 4px;
    height: 16px;
  }
`;

const List = styled.ul`
  margin-top: ${({ theme }) => theme.dim[2]};
  margin-right: ${({ theme }) => theme.dim[3]};
`;

const Icon = styled.button`
  display: ${({ $arrow }) => ($arrow ? "inline-flex" : "none !important")};
  margin-right: ${({ theme }) => theme.dim[1]};
  color: ${({ theme }) => theme.palette.disabled};
`;

const Text = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onSurface};
  white-space: nowrap;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  &:first-child {
    ${Text} {
      direction: ${({ $dir }) => ($dir ? "ltr" : "rtl")};
    }
  }
  &:last-child {
    flex-flow: ${({ $exception }) => ($exception ? "row-reverse" : "row")};
    justify-content: ${({ $exception }) =>
      $exception ? "flex-end" : "flex-start"};
    ${Icon} {
      color: ${({ theme, $exception }) =>
        $exception ? theme.palette.primary : theme.palette.disabled};
      margin-right: ${({ theme, $exception }) =>
        $exception ? 0 : theme.dim[1]};
      margin-left: ${({ theme, $exception }) =>
        $exception ? theme.dim[1] : 0};
    }
  }
`;



export {
    Wrapper,
    Title,
    List,
    Item,
    Text,
    Icon
}