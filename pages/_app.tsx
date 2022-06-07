import * as React from 'react';
import {AppProps} from 'next/app';
import {ThemeProvider, CssBaseline, Box} from '@mui/material';
import theme from '../src/theme';
import NavBar from "../components/navigation/NavBar";

export default function MyApp(props: AppProps) {
    const {Component, pageProps} = props;
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{display: 'flex'}}>
                <NavBar/>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Component {...pageProps} />
            </Box>
        </ThemeProvider>
    );
}
