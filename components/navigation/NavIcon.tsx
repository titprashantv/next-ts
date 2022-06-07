import * as React from 'react';
import {Dashboard, Group} from '@mui/icons-material';

interface iconName {
    icon: string
}

const NavIcon = (props: iconName) => {
    switch (props.icon) {
        case 'Dashboard':
            return <Dashboard/>;
        case 'Group':
            return <Group/>;
        default:
            return <Dashboard/>;
    }
};

export default NavIcon;