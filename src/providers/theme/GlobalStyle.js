import { createGlobalStyle } from 'styled-components';

import BYekanWoff from '../../assets/fonts/Yekan/BYekan.woff';
import BYekanTtf from '../../assets/fonts/Yekan/BYekan.ttf';
import BYekanEot from '../../assets/fonts/Yekan/BYekan.eot';

import ShabnamEot from '../../assets/fonts/shabnam/Shabnam.eot';
import ShabnamWoff2 from '../../assets/fonts/shabnam/Shabnam.woff2';
import ShabnamWoff from '../../assets/fonts/shabnam/Shabnam.woff';
import ShabnamTtf from '../../assets/fonts/shabnam/Shabnam.ttf';

import ShabnamBoldEot from '../../assets/fonts/shabnam/Shabnam-Bold.eot';
import ShabnamBoldWoff2 from '../../assets/fonts/shabnam/Shabnam-Bold.woff2';
import ShabnamBoldWoff from '../../assets/fonts/shabnam/Shabnam-Bold.woff';
import ShabnamBoldTtf from '../../assets/fonts/shabnam/Shabnam-Bold.ttf';

import ShabnamThinEot from '../../assets/fonts/shabnam/Shabnam-Thin.eot';
import ShabnamThinWoff2 from '../../assets/fonts/shabnam/Shabnam-Thin.woff2';
import ShabnamThinWoff from '../../assets/fonts/shabnam/Shabnam-Thin.woff';
import ShabnamThinTtf from '../../assets/fonts/shabnam/Shabnam-Thin.ttf';

import ShabnamLightEot from '../../assets/fonts/shabnam/Shabnam-Light.eot';
import ShabnamLightWoff2 from '../../assets/fonts/shabnam/Shabnam-Light.woff2';
import ShabnamLightWoff from '../../assets/fonts/shabnam/Shabnam-Light.woff';
import ShabnamLightTtf from '../../assets/fonts/shabnam/Shabnam-Light.ttf';

import ShabnamMediumEot from '../../assets/fonts/shabnam/Shabnam-Medium.eot';
import ShabnamMediumWoff2 from '../../assets/fonts/shabnam/Shabnam-Medium.woff2';
import ShabnamMediumWoff from '../../assets/fonts/shabnam/Shabnam-Medium.woff';
import ShabnamMediumTtf from '../../assets/fonts/shabnam/Shabnam-Medium.ttf';

export default createGlobalStyle`
   *{
      padding: 0;
      margin: 0;
      list-style-type:none;
      outline:none;
      &::-webkit-scrollbar{width:8px;height:8px}
      &::-webkit-scrollbar-thumb{background-color:#666}
      &::-webkit-scrollbar-track{background-color:#e0e0e0}
      &:hover::-webkit-scrollbar-thumb{background-color:#555}
      box-sizing:border-box;
   }


   @font-face {
      font-family: Shabnam;
      src: url(${ShabnamEot});
      src: url(${ShabnamWoff2}) format('woff2'),
            url(${ShabnamWoff}) format('woff'),
            url(${ShabnamTtf}) format('truetype');
      font-weight: normal;
   }

    @font-face {
      font-family: Shabnam;
      src: url(${ShabnamBoldEot});
      src: url(${ShabnamBoldWoff2}) format('woff2'),
            url(${ShabnamBoldWoff}) format('woff'),
            url(${ShabnamBoldTtf}) format('truetype');
      font-weight: bold;
   }

   @font-face {
      font-family: Shabnam;
      src: url(${ShabnamThinEot});
      src: url(${ShabnamThinWoff2}) format('woff2'),
            url(${ShabnamThinWoff}) format('woff'),
            url(${ShabnamThinTtf}) format('truetype');
      font-weight: 100;
   }

   @font-face {
      font-family: Shabnam;
      src: url(${ShabnamLightEot});
      src: url(${ShabnamLightWoff2}) format('woff2'),
            url(${ShabnamLightWoff}) format('woff'),
            url(${ShabnamLightTtf}) format('truetype');
      font-weight: 300;
   }

   @font-face {
      font-family: Shabnam;
      src: url(${ShabnamMediumEot});
      src: url(${ShabnamMediumWoff2}) format('woff2'),
            url(${ShabnamMediumWoff}) format('woff'),
            url(${ShabnamMediumTtf}) format('truetype');
      font-weight: 500;
   }

   html{
    height: 100%;
    font-size: 10px;
   }

   body{
      height: 100%;
      font-family: 'Shabnam';
      background-color: ${({theme}) => theme.palette.back};
      &::-webkit-scrollbar{width:10px;height:10px}
      &::-webkit-scrollbar-thumb{background-color:#666}
      &::-webkit-scrollbar-track{background-color:#e0e0e0}
      &:hover::-webkit-scrollbar-thumb{background-color:#555}
   }

   input{
      font-family:'Shabnam';
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