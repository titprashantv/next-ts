import * as React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import {ThemeProvider, CssBaseline, Box} from '@mui/material';
import theme from '../src/theme';
import NavBar from "../components/navigation/NavBar";

export default function MyApp(props: AppProps) {
    const {Component, pageProps} = props;
    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <title>Dashboard</title>
            </Head>
            <ThemeProvider theme={theme}>
                <Box sx={{display: 'flex'}}>
                    <NavBar/>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <Component {...pageProps} />
                </Box>
            </ThemeProvider>
        </div>
    );
}
