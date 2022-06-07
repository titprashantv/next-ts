import * as React from 'react';
import Head from 'next/head';
import {Box} from '@mui/material';

interface Props {
    children?: React.ReactNode;
    pageTitle: string;
}

export default function AuthLayout(props: Props) {
    const {pageTitle, children} = props;

    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <title>{pageTitle} | Analytics</title>
            </Head>
            <Box sx={{display: 'flex', flexGrow: 1, p: 3}}>
                {children}
            </Box>
        </div>
    );
};