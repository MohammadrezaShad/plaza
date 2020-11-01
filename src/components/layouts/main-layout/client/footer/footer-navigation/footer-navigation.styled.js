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
  opacity:1;
  visibility:visible;
  transition:all .3s;

`;

const IconRight=styled.button`
  display: ${({ $arrow }) => ($arrow ? "inline-flex" : "none !important")};
  color: ${({ theme }) => theme.palette.primary};
  position:absolute;
  transition:all .2s;
  transform:translateY(-50%);
  right:-25px;
  top:50%;
  opacity:0;
  visibility:hidden;
  width:0 !important;
  height:0 !important;

`

const Text = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyMdNormal};
  color: ${({ theme }) => theme.palette.onSurface};
  direction:${({dir})=>dir ? dir:'rtl'} !important;
`;

const ItemWrap=styled.div`
white-space:nowrap;
transition:all .3s;
cursor:pointer;
position:relative;
 &:hover{
    padding-right:${({theme,$arrow})=>!$arrow ? 0:theme.dim[2]};
    ${Icon}{
      transform:translateX(-8px);
      opacity:0;
      visibility:hidden;
      transition:transform .2s ,.2s opacity,.2s visibility .2s;

    }
    ${IconRight}{
      right:4px;
      opacity:1;
      visibility:visible;
      width:6px !important;
      height:6px !important;
      transition:right .3s ,.2s opacity,.4s visibility .1s;

    }
  }

  &:first-child {
    ${Text} {
      direction: ${({ $dir }) => ($dir ? "ltr" : "rtl")};
    }
  }
`

const Item = styled.li`
  position:relative;
  display: flex;
  align-items: center;
  transition:all .3s;
  &:not(:last-child) {
    margin-bottom: ${({theme})=>theme.dim[1]};
  }
  ${Text}{
    white-space:${({$arrow})=>$arrow ? 'nowrap':'pre-wrap'};
  }
 
`;


export {
    Wrapper,
    Title,
    List,
    Item,
    Text,
    Icon,
    IconRight,
    ItemWrap
}