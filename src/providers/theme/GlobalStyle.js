import { createGlobalStyle } from 'styled-components';

import ShabnamEot from '../../assets/fonts/shabnam/Shabnam.eot';
import ShabnamWoff2 from '../../assets/fonts/shabnam/Shabnam.woff2';
import ShabnamWoff from '../../assets/fonts/shabnam/Shabnam.woff';
import ShabnamTtf from '../../assets/fonts/shabnam/Shabnam.ttf';

import ShabnamBoldEot from '../../assets/fonts/shabnam/Shabnam-Bold.eot';
import ShabnamBoldWoff2 from '../../assets/fonts/shabnam/Shabnam-Bold.woff2';
import ShabnamBoldWoff from '../../assets/fonts/shabnam/Shabnam-Bold.woff';
import ShabnamBoldTtf from '../../assets/fonts/shabnam/Shabnam-Bold.ttf';

export default createGlobalStyle`
   *{
      padding: 0;
      margin: 0;
      list-style-type:none;
      outline:none;
      &::-webkit-scrollbar{width:6px;height:6px}
      &::-webkit-scrollbar-thumb{border-radius:${({theme}) => theme.defaults.borderRadius};background-color:${({theme}) => theme.palette.strokeVariant}}
      &::-webkit-scrollbar-track{background-color:transparent}
      box-sizing:border-box;
   }

   html{
    height: 100%;
    font-size: 10px;
   }

   body{
      height: 100%;
      font-family: ${({theme}) => theme.defaults.fontName};
      background-color: ${({theme}) => theme.palette.back};
      &::-webkit-scrollbar{width:10px;height:10px}
      &::-webkit-scrollbar-thumb{background-color:#666}
      &::-webkit-scrollbar-track{background-color:#e0e0e0}
      &:hover::-webkit-scrollbar-thumb{background-color:#555}
   }

   input{
      font-family:${({theme}) => theme.defaults.fontName};
      font-weight:bold;
   }

   ::-webkit-input-placeholder{color:#bbb}

   button{
      border:none;
      background:none;
      appearance: none;
      font-family: 'Shabnam';
   }

`