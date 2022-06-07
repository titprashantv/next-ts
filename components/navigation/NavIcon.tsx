import * as React from 'react';
import {Dashboard, AddShoppingCart, PriceChange, Subscriptions, Assignment, Group, InsertChart, Work, Feed, Ballot,SupportAgent} from '@mui/icons-material';

interface Props {
    icon: string;
}

const NavIcon = (props: Props) => {
    const {icon} = props;
    switch (icon) {
        case 'Dashboard':
            return <Dashboard/>;
        case 'AddShoppingCart':
            return <AddShoppingCart/>;
        case 'PriceChange':
            return <PriceChange/>;
        case 'Subscriptions':
            return <Subscriptions/>;
        case 'Assignment':
            return <Assignment/>;
        case 'Group':
            return <Group/>;
        case 'InsertChart':
            return <InsertChart/>;
        case 'Work':
            return <Work/>;
        case 'Feed':
            return <Feed/>;
        case 'Ballot':
            return <Ballot/>;
        case 'SupportAgent':
            return <SupportAgent/>;
        default:
            return <Dashboard/>;
    }
};

export default NavIcon;