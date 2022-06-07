import * as React from 'react';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material';
import theme from '../src/theme';

export default function MyApp(props: AppProps) {
    const {Component, pageProps} = props;
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
