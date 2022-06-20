import * as React from 'react';
import Head from 'next/head';
import {Box} from '@mui/material';
import theme from "../src/theme";

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
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.primary.main, height: '100vh'}}>
                <div className="auth-box">
                    <div className="auth-bg">
                        <img src="/static/login.jpg"/>
                    </div>
                    <div className="auth-form-box">
                        <div className="auth-form">
                            {children}
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
};