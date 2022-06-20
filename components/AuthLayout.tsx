import * as React from 'react';
import Head from 'next/head';
import {Box, Typography} from '@mui/material';
import theme from "../src/theme";
import {FlutterDash} from "@mui/icons-material";

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
                        <Box>
                            <Typography variant="h4" noWrap component="div" sx={{display: 'flex', alignItems: 'center', fontWeight:500}}>
                                <FlutterDash color="secondary" sx={{marginRight: '10px', width: '80px', height: '80px'}}/> Analytics
                            </Typography>
                        </Box>
                        <div className="auth-form">
                            {children}
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
};