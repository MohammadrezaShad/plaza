import styled from 'styled-components';
import {Link} from 'react-router-dom';

const List=styled.ul`
margin-right:${({theme})=>theme.dim[2]};
`

const Item=styled.li`
 &:not(:last-child){
   margin-bottom:${({theme})=>theme.dim[1]};
 }
`
const ItemLink=styled(Link)`
  display:inline-flex;
  text-decoration:none;
`

const Text=styled.span`
 display:inline-flex;
 ${({theme})=>theme.typography.bodyMdNormal};
`

const Category=styled.span`
 display:inline-flex;
 ${({theme})=>theme.typography.bodyMdNormal};
 margin-right:${({theme})=>theme.dim[1]};
 color:${({theme})=>theme.palette.primary};
`

export {
    List,
    Item,
    ItemLink,
    Text,
    Category
}