import styled from 'styled-components';

export const StyledFilterItem = styled.div`
display:inline-flex;
justify-content:center;
align-items:center;
color:${({ theme, index, selectedFilter }) => 
selectedFilter === index ? theme.palette.onPrimary : theme.palette.onSurface};
background-color:${({ theme, index, selectedFilter }) => 
selectedFilter === index ? theme.palette.primary : theme.palette.back};
border:${({theme, index, selectedFilter})=>selectedFilter === index ? 'none':`1px solid ${theme.palette.stroke}`};
padding:${({ theme }) => theme.dim[1]};
${({ theme }) => theme.typography.bodyMdNormal};
line-height:0.8;
cursor:pointer;
border-radius:${({ theme }) => theme.defaults.borderRadius};
  &:not(:first-child){
      margin-right:${({ theme }) => theme.dim[1]};
  }
`

