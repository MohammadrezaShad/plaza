const palette = {
    back: '#FFFFFF',
    primary: '#F89A01',
    secondary: '#03A9F4',
    surface: '#03A9F4',
    error: '#FF4A6D',
    success: '#42D9BB',
    stroke: '#D8D8D8',
    onSurface: '#2B273C',
    subtitle: '#CCCCCC',
    unselected: '#BBBAC0',
    strokeVariant: '#F3F3F3',
    surface: '#F7F7F7',

    greenUser: '#42D9BB',
    silverUser: '#BBBAC0',
    goldenUser: '#FBC635',
    diamondUser: '#896FFA'
};

const dim = {
    1: "8px",
    2: "16px",
    3: "24px",
    4: "32px",
    5: "40px"
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
                line-height: 1.5;`

}

const defaults = {
    screenWideSize: '1600px',
    screenSideDim: dim[1],
    borderRadius: '3px',
    direction: 'rtl'
}

const theme = {
    palette,
    dim,
    typography,
    defaults
};




export { theme };