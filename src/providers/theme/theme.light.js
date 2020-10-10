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

    greenUser: '#42D9BB',
    silverUser: '#BBBAC0',
    goldenUser: '#FBC635',
    diamondUser: '#896FFA'
};

const getUserLevelColor = (level) => {
    switch (level){
        case 1:
            return palette.greenUser;
        case 2:
            return palette.silverUser;
        case 3:
            return palette.goldenUser;
        case 4:
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
    shortBoxShadow:'0 3px 6px rgba(0,0,0,.05)'
}

const theme = {
    palette,
    dim,
    typography,
    defaults,
    zIndex,
    getUserLevelColor
};




export { theme };