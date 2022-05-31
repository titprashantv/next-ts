import * as React from 'react';
import {
    styled, AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Tooltip, Avatar, Menu,
    MenuItem, Badge
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';

const headerHeight = '64px';
const drawerWidth = 220;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(1)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(3)',
            opacity: 0,
        },
    },
}));

export default function NavBar(props: Props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const drawer = (
        <div>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed">
                <Toolbar sx={{height: headerHeight, flexGrow: 1, justifyContent: 'space-between'}} id="back-to-top-anchor">
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{display: {sm: 'none'}}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{display: 'flex', alignItems: 'center'}}>
                        <FlutterDashIcon color="secondary" fontSize="large" sx={{marginRight: '10px'}}/> Dashboard
                    </Typography>


                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <StyledBadge overlap="circular" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} variant="dot">
                                    <Avatar alt="Remy Sharp" src="/static/avatar.jpg"/>
                                </StyledBadge>
                            </IconButton>
                        </Tooltip>
                        <Menu sx={{mt: '45px'}} id="menu-appbar" anchorEl={anchorElUser} keepMounted anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                              transformOrigin={{vertical: 'top', horizontal: 'right'}} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                            {['Profile', 'Account', 'Dashboard', 'Logout'].map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}} aria-label="mailbox folders">
                <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{keepMounted: true}}
                        sx={{display: {xs: 'block', sm: 'none'}, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth, top: headerHeight}}}>
                    {drawer}
                </Drawer>
                <Drawer variant="permanent" sx={{display: {xs: 'none', sm: 'block'}, '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth, top: headerHeight}}} open>
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}
