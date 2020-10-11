import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  background-color: ${({ theme }) => theme.palette.surface};
  padding: ${({ theme }) => theme.dim[2]};
`;

export const Head = styled.span`
  display: inline-flex;
  ${({ theme }) => theme.typography.bodyMdBold};
  margin-bottom: ${({ theme }) => theme.dim[2]};
  color: ${({ theme }) => theme.palette.onSurface};
`;

export const List = styled.ul`
margin-right:${({theme})=>theme.dim[2]};
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    &:not(:last-child){
        margin-bottom:${({theme})=>theme.dim[1]};
    }
`;

export const Text = styled.span`
   display:inline-flex;
   color:${({theme})=>theme.palette.onSurface};
   margin-left:${({theme})=>theme.dim[1]};
   ${({theme})=>theme.typography.bodyMdNormal};
   transition:color .3s;
`;

export const Icon = styled.span`
   display:inline-flex;
   ${({theme})=>theme.typography.bodyMdNormal}
   color:${({theme})=>theme.palette.onSurface};
   transition:color .3s;
   margin-left:${({theme})=>theme.dim[1]};
`;

export const ItemLink = styled(Link)`
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


