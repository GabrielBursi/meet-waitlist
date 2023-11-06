'use client'

export const theme = {
    grid: {
        container: '130rem',
        gutter: '3.2rem'
    },
    border: {
        radius: {
            big: '5rem',
            small: '0.4rem'
        }
    },
    font: {
        family:
            "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        light: 300,
        normal: 400,
        bold: 600,
		sizes: {
			xsmall: '1.4rem',
			small: '1.6rem',
			medium: '1.8rem',
			large: '2.0rem',
			xlarge: '4.4rem',
			xxlarge: '6.2rem',
			huge: '9.4rem'
		}
    },
    colors: {
		primary: '#32f5c8',
		secondary: '#013243',
		mainBg: '#013243',
		primaryText: '#32f5c8',
		secondaryText: '#a9bdc6',
    },
    spacings: {
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem'
    },
    layers: {
        base: 10,
        menu: 20,
        overlay: 30,
        modal: 40,
        alwaysOnTop: 50
    },
    transition: {
        default: '0.3s ease-in-out',
        fast: '0.1s ease-in-out'
    },
    breakpoints: {
        smallHeight: '599px',
        mediumHeight: '899px',
        largeHeight: '900px',
    },
} as const
