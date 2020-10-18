import styled from "styled-components";
import {Link} from 'react-router-dom'
const Wrapper = styled.div`

`;

const Head = styled.span`
 display:inline-flex;
  ${({theme})=>theme.typography.bodyMdBold};
  margin-bottom:${({theme})=>theme.dim[2]};
  color:${({theme})=>theme.palette.onSurface};
`;

const List = styled.ul`
 margin-right:${({theme})=>theme.dim[2]};
`;

const Item = styled.li`
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom:${({theme})=>theme.dim[1]};
    }
`;

const Icon = styled.span`
   display:inline-flex;
   color:${({theme})=>theme.palette.lightGrey};
   margin-left:${({theme})=>theme.dim[1]};
   transition:color .3s;
`;

const Text = styled.span`
   display:inline-flex;
   ${({theme})=>theme.typography.bodyMdNormal}
   color:${({theme})=>theme.palette.onSurface};
   transition:color .3s;
`;

const ItemLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    text-decoration:none;
    &:hover{
        ${Icon}, ${Text}{
         color:${({theme})=>theme.palette.secondary};
        }
    }
`;

export { 
    Wrapper,
    Head,
    List,
    Item,
    ItemLink,
    Icon,
    Text
 };
