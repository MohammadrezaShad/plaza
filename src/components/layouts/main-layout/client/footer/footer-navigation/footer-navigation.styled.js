import styled from "styled-components";

const Wrapper = styled.div`
flex:0;
flex-basis: 24.8%;
max-width:24.8%;
`;

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
  transition:transform .2s ,.2s opacity,.2s visibility .2s;
`;

const IconRight=styled.button`
  display: ${({ $arrow }) => ($arrow ? "inline-flex" : "none !important")};
  color: ${({ theme }) => theme.palette.primary};
  position:absolute;
  transition:right .3s ,.2s opacity,.2s visibility .2s;
  transform:translateY(-50%);
  right:-25px;
  top:50%;
  opacity:0;
`

const Text = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onSurface};
`;

const Item = styled.li`
  position:relative;
  cursor:pointer;
  display: flex;
  align-items: center;
  transition:all .3s;
  ${Text}{
    white-space:${({$arrow})=>$arrow ? 'nowrap':'pre-wrap'};
  }
  &:hover{
    padding-right:${({theme,$arrow})=>!$arrow ? 0:theme.dim[1]};
    ${Icon}{
      transform:translateX(-8px);
      opacity:0;
    }
    ${IconRight}{
      right:-8px;
      opacity:1;
    }
  }
  &:not(:last-child) {
    margin-bottom: ${({theme})=>theme.dim[1]};
  }
  &:first-child {
    ${Text} {
      direction: ${({ $dir }) => ($dir ? "ltr" : "rtl")};
    }
  }
`;


export {
    Wrapper,
    Title,
    List,
    Item,
    Text,
    Icon,
    IconRight
}