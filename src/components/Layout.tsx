import * as React from 'react';
import Head from 'next/head';
import {Box, CssBaseline, Toolbar} from '@mui/material';
import NavBar from "./navigation/NavBar";

interface Props {
    children?: React.ReactNode;
    pageTitle: string;
}

export default function Layout(props: Props) {
    const {pageTitle, children} = props;

    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <title>{pageTitle} | Analytics</title>
            </Head>
            <Box sx={{display: 'flex'}}>
                <NavBar pageTitle={pageTitle}/>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <Toolbar/>
                    {children}
                </Box>
            </Box>
        </div>
    );
};