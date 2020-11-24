import styled from 'styled-components';


const widthProgress = (lvl) => {
  switch (lvl) {
    case 1:
      return '20%'
    case 2:
      return '60%'
    case 3:
      return '100%'
    default:
      return '0'

  }
}

export const StyledWrapper = styled.div`
  display:flex;
  justify-content:space-between;
  position:relative;
  direction:rtl;
  padding-bottom:${({ theme }) => theme.dim[2]};
  border-bottom:1px dashed ${({ theme }) => theme.palette.stroke};
  &::after{
    position:absolute;
    content:"";
    height:4px;
    right:0;
    bottom:-2px;
    width:${({ level }) => widthProgress(level)};
    background-color:${({ theme }) => theme.palette.secondary};
    border-radius:${({ theme }) => theme.defaults.borderRadius};
  }
`