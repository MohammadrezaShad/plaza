import { createGlobalStyle } from 'styled-components';

import BYekanWoff from '../../assets/fonts/Yekan/BYekan.woff';
import BYekanTtf from '../../assets/fonts/Yekan/BYekan.ttf';
import BYekanEot from '../../assets/fonts/Yekan/BYekan.eot';

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
   }

   @font-face {
      font-family: 'Yekan';
      font-style: normal;
      font-weight: normal;
      src:url('${BYekanEot}');
      font-display:fallback;
      src:
         local('Yekan'),
         url('${BYekanWoff}') format('woff'),
         url('${BYekanTtf}') format('truetype')
   }

  html{
    height: 100%;
    font-size: 10px;
   }

   body{
      height: 100%;
      font-family: 'Yekan';
      background-color: ${({theme}) => theme.palette.bg};
      &::-webkit-scrollbar{width:10px;height:10px}
      &::-webkit-scrollbar-thumb{background-color:#666}
      &::-webkit-scrollbar-track{background-color:#e0e0e0}
      &:hover::-webkit-scrollbar-thumb{background-color:#555}
   }

   input{
      font-family: 'Yekan';
      font-weight:bold;
   }

   ::-webkit-input-placeholder{color:#bbb}

   button{
      border:none;
      background:none;
      appearance: none;
      font-family: 'Yekan';
   }

`