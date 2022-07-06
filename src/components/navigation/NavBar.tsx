import * as React from 'react';
import {styled, AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Avatar, Badge} from '@mui/material';
import {MoveToInbox, Mail, FlutterDash, Menu} from '@mui/icons-material';
import MainMenu from "./MainMenu";
import ActiveLink from "./ActiveLink";
import theme from "theme";

const headerHeight = 64;
const drawerWidth = 225;

interface Props {
    window?: () => Window;
    pageTitle: string;
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
    const {window, pageTitle} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [userProfileOpen, setUserProfileOpen] = React.useState(false);

    const handleUserProfileToggle = () => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setUserProfileOpen(!userProfileOpen);
    };

    const handleSideBarToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const sideBar = (
        <div>
            <List>
                {MainMenu.map((row, index) => (
                    <ListItem key={row.name} disablePadding sx={{marginBottom: '5px'}}>
                        <ActiveLink menuName={row.name} menuIcon={row.icon} href={row.path} as=""/>
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
                <Box sx={{display: 'flex'}}>
                    <Box sx={{
                        width: drawerWidth, height: headerHeight, display: {xs: 'none', md: 'flex'}, alignItems: 'center', justifyContent: 'center',
                        borderRight: '1px solid rgba(255, 255, 255, 0.12)', borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
                    }}>
                        <Typography variant="h6" noWrap component="div" sx={{display: 'flex', alignItems: 'center'}}>
                            <FlutterDash color="secondary" sx={{marginRight: '10px', width: '48px', height: '48px'}}/> Analytics
                        </Typography>
                    </Box>
                    <Toolbar sx={{height: headerHeight, flexGrow: 1, justifyContent: 'space-between'}} id="back-to-top-anchor">
                        <Box sx={{width: drawerWidth, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleSideBarToggle} sx={{display: {md: 'none'}}}>
                                <Menu/>
                            </IconButton>
                            <Typography variant="h6" noWrap component="div" sx={{display: 'flex', alignItems: 'center'}}>
                                <FlutterDash color="secondary" fontSize="large" sx={{marginRight: '10px', width: '48px', height: '48px'}}/> Analytics
                            </Typography>
                        </Box>
                        <Typography variant="h6" noWrap component="div" sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center'}}>
                            {pageTitle}
                        </Typography>

                        <Box sx={{flexGrow: 0}}>
                            <IconButton onClick={handleUserProfileToggle()} sx={{p: 0}}>
                                <StyledBadge overlap="circular" anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} variant="dot">
                                    <Avatar alt="Remy Sharp" src="/static/avatar.jpg"/>
                                </StyledBadge>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Box>
            </AppBar>
            <Box component="nav" sx={{width: {md: drawerWidth}, flexShrink: {md: 0}}} aria-label="mailbox folders">
                <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleSideBarToggle} ModalProps={{keepMounted: true}}
                        sx={{
                            display: {xs: 'block', md: 'none'},
                            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth, top: headerHeight, backgroundColor: theme.palette.primary.main, border: 'none'}
                        }}>
                    {sideBar}
                </Drawer>
                <Drawer variant="permanent" open
                        sx={{
                            display: {xs: 'none', md: 'block'},
                            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth, top: headerHeight, backgroundColor: theme.palette.primary.main, border: 'none'}
                        }}>
                    {sideBar}
                </Drawer>
            </Box>

            <Drawer anchor="right" open={userProfileOpen} onClose={handleUserProfileToggle()} onKeyDown={handleUserProfileToggle()}>
                <Box sx={{width: drawerWidth}} role="presentation">
                    <List>
                        {['Profile', 'Account', 'Dashboard', 'Logout'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <MoveToInbox/> : <Mail/>}
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
                                        {index % 2 === 0 ? <MoveToInbox/> : <Mail/>}
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}
