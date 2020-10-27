import styled from "styled-components";


export const StyledIcon=styled.span`
 &:first-child{
     margin-left:${({theme})=>theme.dim[1]};
 }
 &:not(:first-child){
     margin-right:${({theme})=>theme.dim[1]};
 }
`

export const StyledText=styled.span`

`