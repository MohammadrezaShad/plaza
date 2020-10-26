import styled from 'styled-components';

const colorSwitch = (theme,type) => {
    switch (type) {
        case 1:
          return theme.palette.error
        case 2:
          return theme.palette.nero
        case 3:
          return theme.palette.atlantis
        case 4:
          return theme.palette.hotPink
        default:
           break;
    }
}

export const StyledWrapper=styled.span`
display:inline-flex;
border-radius:50%;
height:8px;
width:8px;
background-color:${({theme,type})=>colorSwitch(theme,type)};
&:not(:last-child){
    margin-left:4px;
}
`