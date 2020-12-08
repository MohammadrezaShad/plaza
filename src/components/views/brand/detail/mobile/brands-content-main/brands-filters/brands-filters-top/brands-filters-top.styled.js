import styled from 'styled-components';


export const StyledBlock = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 &:not(:last-child){
     margin-left:${({ theme }) => theme.dim[1]};
 }
`

export const StyledIcon = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.onSurface};
`

export const StyledText = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.onSurface};
 margin-left:${({ theme }) => theme.dim[1]};
 ${({ theme }) => theme.typography.bodyMdNormal};
`

export const StyledFiltersCount = styled.span`
 display:inline-flex;
 justify-content:center;
 align-items:center;
 color:${({ theme }) => theme.palette.onPrimary};
 background-color:${({ theme }) => theme.palette.error};
 margin-right:${({ theme }) => theme.dim[1]};
 height:20px;
 width:20px;
 border-radius:50%;
 ${({ theme }) => theme.typography.subtitleXsNormal};

`

export const StyledCount = styled.span`
 display:inline-flex;
 margin-top:2px;
`