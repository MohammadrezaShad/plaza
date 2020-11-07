import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
        back: string;
        onBack: string;
        primary: string;
        onPrimary: string;
        secondary: string;
        onSecondary: string;
        surface: string;
        onSurface: string;
        error: string;
        onError: string;
        success: string;
        onSuccess: string;
        disabled: string,
        onDisabled: string,
        stroke: string,
        subtitle: string,
        strokeVariant: string,
        overlay: string,
        lightGrey:string,
        nightRider:string,
        nero:string,
        hotPink:string,
        whisper:string,
        atlantis:string,
        ghostWhite:string,
        greenUser: string,
        silverUser: string,
        goldenUser: string,
        diamondUser: string
    },
    dim: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
    },
    zIndex: {
      header:number
    },
    typography: {
        headline1: string;
        headline2: string;
        headline3: string;
        body2XLgBold:string;
        body3XLgBold:string;
        bodyXLgBold:string;
        bodyLgBold: string;
        bodyMdBold: string;
        bodyMdNormal: string;
        bodySmBold: string;
        bodySmNormal: string;
        subtitleXsNormal: string;
        buttonMdNormal: string;
        buttonXsNormal: string;
    },
    defaults: {
        screenWideSize: string;
        screenSideDim: string;
        navHeight: string;
        borderRadius: string;
        direction: string;
        boxShadow: string;
        boxShadowInset:string;
        shortBoxShadow: string;
    },
    getUserLevelColor: (level: number) => string,
    breakPoints: {
      mobileSm:string,
      mobile: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
      desktopL:string;
  }
  }
}