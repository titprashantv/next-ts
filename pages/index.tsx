import * as React from 'react';
import {Grid, Paper} from '@mui/material';
import Layout from "../components/Layout";
import VerticalBarChart from "../components/chart/VerticalBarChart";
import HorizontalBarChart from "../components/chart/HorizontalBarChart";
import StackedBarChart from "../components/chart/StackedBarChart";
import GroupedBarChart from "../components/chart/GroupedBarChart";
import LineChart from "../components/chart/LineChart";
import MultiaxisLineChart from "../components/chart/MultiaxisLineChart";
import PieChart from "../components/chart/PieChart";
import DoughnutChart from "../components/chart/DoughnutChart";
import PolarAreaChart from "../components/chart/PolarAreaChart";
import RadarChart from "../components/chart/RadarChart";
import ScatterChart from "../components/chart/ScatterChart";
import BubbleChart from "../components/chart/BubbleChart";
import MultitypeChart from "../components/chart/MultitypeChart";
import EventChart from "../components/chart/EventChart";
import RefChart from "../components/chart/RefChart";
import GradientChart from "../components/chart/GradientChart";

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
                <Grid item xs={4}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <MultiaxisLineChart/>
                    </Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <PieChart/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <DoughnutChart/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <PolarAreaChart/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <RadarChart/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <ScatterChart/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <BubbleChart/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <MultitypeChart/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <EventChart/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <RefChart/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={5} sx={{padding: '24px'}}>
                        <GradientChart/>
                    </Paper>
                </Grid>
            </Grid>
        </Layout>
    )
};
