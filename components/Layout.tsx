import * as React from 'react';
import Head from 'next/head';
import {Box, Toolbar} from '@mui/material';

interface TitleProps {
    children?: React.ReactNode;
    pageTitle: string;
}

export default function Layout(props: TitleProps) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <title>{props.pageTitle} | Analytics</title>
            </Head>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                {props.children}
            </Box>
        </div>
    );
}