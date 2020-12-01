import styled from 'styled-components';

export const StyledWrapper = styled.div`
 overflow:hidden;
 border:1px solid ${({ theme }) => theme.palette.stroke};
 padding:${({ theme }) => theme.dim[3]} 0;
`

export const StlyedContainer = styled.ul`
display:flex;
flex: 0 0 100%;
min-width:0;
position:relative;
left:${({ selectedItem }) => `${100 * selectedItem}%`};
transition:1s all;
`

export const StyledItem = styled.li`
  position:relative;
  flex:0 0 100%;
  transition:all .3s;
  padding:${({ theme }) => theme.dim[4]};
`


export const StyledHead = styled.div`
display:flex;
justify-content:space-between;
margin:0 ${({ theme }) => theme.dim[4]};
`

export const StyledTitle = styled.span`
  position:relative;
  display:inline-flex;
  align-items:center;
  ${({ theme }) => theme.typography.headline2}
  color: ${({ theme }) => theme.palette.onSurface};
  margin-right:${({ theme }) => theme.dim[2]};
  &::before{
    content: "";
    position: absolute;
    right: -8px;
    transform:translate(100%,-50%);
    top: 50%;
    background-color: ${({ theme }) => theme.palette.primary};
    width: 4px;
    height: 16px;
  }
`

export const StyledButtonWrap = styled.div`
display:flex;
align-items:center;
&>button{
    &:first-child{
        margin-left:${({ theme }) => theme.dim[2]};
    }
}
`

export const StyledPreview = styled.div`
display:flex;
align-items:center;
margin:0 ${({ theme }) => theme.dim[3]};
position:relative;
&::after{
    content:"";
    position:absolute;
    top:-${({ theme }) => theme.dim[3]};
    left:0;
    right:0;
    height:1px;
    background-color:${({ theme }) => theme.palette.strokeVariant};
}
`