import styled from 'styled-components';


export const StyledWrapper = styled.div`
 display:flex;
 flex-flow:column;
 padding:${({ theme }) => theme.dim[4]};
`


export const StyledHead = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin-bottom:${({ theme }) => theme.dim[2]};
`

export const StyledItemWrap = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 position: relative;
 flex:0 0 20%;
 padding:${({ theme }) => theme.dim[1]};
`

export const StyledBottom = styled.div`
 display:flex;
 padding-top:${({ theme }) => theme.dim[2]};
 margin:0 -${({ theme }) => theme.dim[1]};
 margin-top:${({ theme }) => theme.dim[2]};
 border-top:1px solid ${({ theme }) => theme.palette.strokeVariant};
`

export const StyledContent = styled.div`
 display:flex;
 flex-wrap:wrap;
 margin:0 -${({ theme }) => theme.dim[1]};
`

export const StyledTitle = styled.span`
 display:inline-flex;
 ${({ theme }) => theme.typography.bodyLgBold};
 color:${({ theme }) => theme.palette.onSurface};
`