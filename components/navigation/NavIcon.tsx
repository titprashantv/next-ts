import * as React from 'react';
import {Dashboard, Group, InsertChart} from '@mui/icons-material';

interface Props {
    icon: string;
}

const NavIcon = (props: Props) => {
    const {icon} = props;
    switch (icon) {
        case 'Dashboard':
            return <Dashboard/>;
        case 'Group':
            return <Group/>;
        case 'InsertChart':
            return <InsertChart/>;
        default:
            return <Dashboard/>;
    }
};

export default NavIcon;