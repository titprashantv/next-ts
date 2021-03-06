import * as React from 'react';
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import NavIcon from "./NavIcon";
import theme from "theme";

interface Props {
    menuName: string;
    menuIcon: string;
    href: string;
    as: string;
}

const ActiveLink = (props: Props) => {
    const {menuName, menuIcon, href, as} = props;
    const {asPath, isReady} = useRouter();
    const [activeClass, setActiveClass] = useState('');
    const [currentPath, setCurrentPath] = useState('');


    useEffect(() => {
        // Check if the router fields are updated client-side
        if (isReady) {
            // Dynamic route will be matched via props.as
            // Static route will be matched via props.href
            const linkPathname = new URL(as || href, location.href).pathname;
            if (linkPathname !== currentPath) {
                setCurrentPath(linkPathname);

                // Using URL().pathname to get rid of query and hash
                const activePathname = new URL(asPath, location.href).pathname;

                const newClassName = linkPathname === activePathname ? 'active' : '';
                setActiveClass(newClassName);
            }
        }
    }, [asPath, isReady, as, href, activeClass]);

    return (
        <Link href={href} key={menuName}>
            <ListItemButton className={activeClass} sx={{
                color: theme.palette.primary.light, paddingTop: '4px', paddingBottom: '4px',
                backgroundColor: activeClass === 'active' ? theme.palette.secondary.main : theme.palette.primary.main,
                '&:hover': {color: theme.palette.primary.light, backgroundColor: theme.palette.secondary.main}
            }}>
                <ListItemIcon sx={{minWidth: 36, color: theme.palette.primary.light}}>
                    <NavIcon icon={menuIcon}/>
                </ListItemIcon>
                <ListItemText primary={menuName}/>
            </ListItemButton>
        </Link>
    )
};

export default ActiveLink
