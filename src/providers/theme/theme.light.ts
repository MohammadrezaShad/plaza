/// <reference path="./themeModules.d.ts" />
import {DefaultTheme} from "styled-components";
import userLevel from "../../constants/user-levels";


const palette = {
    back: '#FFFFFF',
    onBack: '#2B273C',
    primary: '#F89A01',
    onPrimary: '#FFFFFF',
    secondary: '#03A9F4',
    onSecondary: '#FFFFFF',
    surface: '#F7F7F7',
    onSurface: '#2B273C',
    error: '#FF4A6D',
    onError: '#FFFFFF',
    success: '#42D9BB',
    onSuccess: '#FFFFFF',
    disabled: '#BBBAC0',
    onDisabled: 'FFFFFF',
    stroke: '#D8D8D8',
    subtitle: '#757280',
    strokeVariant: '#F3F3F3',
    overlay: 'rgba(0,0,0,.5)',
    lightGrey:'#908D99',
    nightRider:'#333333',
    whisper:'#eeeeee',
    greenUser: '#42D9BB',
    silverUser: '#BBBAC0',
    goldenUser: '#FBC635',
    diamondUser: '#896FFA'
};

const getUserLevelColor = (level:number) => {
    switch (level){
        case userLevel.GREEN:
            return palette.greenUser;
        case userLevel.SILVER:
            return palette.silverUser;
        case userLevel.GOLDEN:
            return palette.goldenUser;
        case userLevel.DIAMOND:
            return palette.diamondUser;
        default:
            return palette.greenUser;
    }
}

const dim = {
    1: "8px",
    2: "16px",
    3: "24px",
    4: "32px",
    5: "40px",
    6: "48px",
    7: "56px",
}

const zIndex = {
    header: 100
}

const typography = {

    headline1:`font-size: 24px;
                font-weight: bold;
                line-height: 1.5;`,

    headline2:`font-size: 18px;
                font-weight: bold;
                line-height: 1.5;`,

    headline3:`font-size: 16px;
                font-weight: bold;
                line-height: 1.5;`,
     bodyLgBold:`font-size: 18px;
                font-weight: bold;
                line-height: 1.5;`,            
    bodyMdBold:`font-size: 16px;
                font-weight: bold;
                line-height: 1.5;`,

    bodyMdNormal:`font-size: 16px;
                font-weight: normal;
                line-height: 1.5;`,

    bodySmBold:`font-size: 14px;
                font-weight: bold;
                line-height: 1.5;`,

    bodySmNormal:`font-size: 14px;
                font-weight: normal;
                line-height: 1.5;`,

    subtitleXsNormal:`font-size: 12px;
                font-weight: normal;
                line-height: 1.5;`
}

const defaults = {
    screenWideSize: '1600px',
    screenSideDim: dim[2],
    navHeight:'37px',
    borderRadius: '4px',
    direction: 'rtl',
    boxShadow:'0 6px 12px rgba(0,0,0,.05)',
    boxShadowInset:'inset 0px 6px 12px 0px rgba(0, 0, 0, 0.08)',
    shortBoxShadow:'0 3px 6px rgba(0,0,0,.05)'
}
 const mediaQueries = (breakPoint:string):string => {
    return `@media only screen and (max-width: ${breakPoint})`;
  };

const breakPoints={
    tablet:  mediaQueries('768px'),
    laptop:  mediaQueries('1024px'),
    laptopL:  mediaQueries('1440px'),
    desktop: mediaQueries('2560px')
}
// xs: 480,
// sm: 768,
// md: 992,
// lg: 1200

const theme:DefaultTheme = {
    palette,
    dim,
    typography,
    defaults,
    zIndex,
    getUserLevelColor,
    breakPoints
};



export { theme };