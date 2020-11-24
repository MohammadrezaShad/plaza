import styled from 'styled-components';


export const StyledWrapper = styled.div`
padding:0 ${({ theme }) => theme.dim[1]};
cursor:pointer;
width:26.4%;

`

export const StyledImgWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.dim[1]};
  position:relative;
  &:after{
      content:"";
      position:absolute;
      opacity: ${({ index, selectedItem }) => (index === selectedItem ? 1 : 0)};
    visibility: ${({ index, selectedItem }) => (index === selectedItem ? "visible" : "hidden")};
    transition: 0s visibility, 0.3s opacity;
    transition-delay: ${({ index, selectedItem }) => (index === selectedItem ? "0s , 0s" : ".3s , 0s")};
      bottom:-8px;
      left:0;
      right:0;
      height:2px;
      background-color:${({ theme }) => theme.palette.primary};
  }
`

export const StyledImgContainer = styled.div`
    display: block;
    width: 100%;
    padding-top: 100%;
    position: relative;
`

export const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
` 