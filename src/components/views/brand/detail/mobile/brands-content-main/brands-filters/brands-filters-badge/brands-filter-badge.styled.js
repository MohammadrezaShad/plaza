import styled from 'styled-components';


export const StyledWrapper = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 padding:${({ theme }) => theme.dim[1]};
 background-color:${({ theme }) => theme.palette.secondary};
 border-radius:${({ theme }) => theme.defaults.borderRadius};
`

export const StyledText = styled.span`
 display:inline-flex;
 margin-left:${({ theme }) => theme.dim[1]};
 color:${({ theme }) => theme.palette.onPrimary};
 line-height:1;
`
export const StyledIcon = styled.span`
 display:inline-flex;
 color:${({ theme }) => theme.palette.onPrimary};
`