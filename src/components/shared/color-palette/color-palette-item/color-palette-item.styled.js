import styled from 'styled-components';

const backgroundPicker = (theme, id) => {
    switch (id) {
        case 1:
            return theme.palette.nero
        default:
            return theme.palette.nero
    }
}


export const StyledWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
z-index:10;
height:48px;
width:48px;
background-color:${({ theme, id }) => backgroundPicker(theme, id)};
`

export const StyledLayout=styled.div`
    position:absolute;
    border-radius:50%;
    height:58px;
    width:58px;
    background-color:transparent;
    border:5px solid ${({ theme, }) => theme.palette.strokeVariant};
    transform:translate(-50%,-50%);
    top:50%;
    left:50%;
`

export const StyledIcon=styled.span`
 position:absolute;
 top:50%;
 left:50%;
 transform: translate(-50%, -50%);
 color:${({theme})=>theme.palette.onPrimary};
`

export const StyledTooltip=styled.span`
 display:inline-flex;
 position:absolute;
 top: -25px;
`