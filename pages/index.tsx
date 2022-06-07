import * as React from 'react';
import {Grid, Paper} from '@mui/material';
import Layout from "../components/Layout";
import VerticalBarChart from "../components/chart/VerticalBarChart";
import HorizontalBarChart from "../components/chart/HorizontalBarChart";
import StackedBarChart from "../components/chart/StackedBarChart";
import GroupedBarChart from "../components/chart/GroupedBarChart";
import LineChart from "../components/chart/LineChart";

export default function Home() {
    return (
        <Layout pageTitle="Dashboard">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <VerticalBarChart/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <HorizontalBarChart/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <StackedBarChart/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <GroupedBarChart/>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <LineChart/>
                    </Paper>
                </Grid>
            </Grid>
        </Layout>
    )
};
