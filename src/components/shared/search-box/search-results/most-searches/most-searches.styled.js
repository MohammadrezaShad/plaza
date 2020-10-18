import styled from "styled-components";
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
 margin-top:${({theme})=>theme.dim[3]};
 padding:${({theme})=>theme.dim[2]};
 border-radius:${({theme})=>theme.defaults.borderRadius};
 background-color:${({theme})=>theme.palette.surface};
`;
 
const Head=styled.span`
display:inline-flex;
${({theme})=>theme.typography.bodyMdBold};
margin-bottom:${({theme})=>theme.dim[2]};
color:${({theme})=>theme.palette.onSurface};
`

const List=styled.ul`
display:flex;

`
const Item=styled.li`
&:not(:last-child){
    margin-left:${({theme})=>theme.dim[4]};
}

`

const Text=styled.span`
display: inline-flex;
${({theme})=>theme.typography.bodyMdNormal};
transition:color .3s;
`

const ItemLink=styled(Link)`
display: inline-flex;
align-items: center;
cursor: pointer;
text-decoration:none;
color:${({theme})=>theme.palette.onSurface};
&:hover{
        ${Text}{
         color:${({theme})=>theme.palette.secondary};
        }
    }
`

export { 
    Wrapper,
    Head,
    List,
    Item,
    ItemLink,
    Text
 };
