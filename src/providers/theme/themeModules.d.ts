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
    typography: {
        headline1: string;
        headline2: string;
        headline3: string;
        bodyMdNormal: string;
        bodySmBold: string;
        bodySmNormal: string;
        subtitleXsNormal: string;
    },
    defaults: {
        screenWideSize: string;
        screenSideDim: string;
        navHeight: string;
        borderRadius: string;
        direction: string;
        boxShadow: string;
        shortBoxShadow: string;
    },
    getUserLevelColor: (level: number) => string
  }
}