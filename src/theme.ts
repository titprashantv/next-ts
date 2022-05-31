import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#17252A',
        },
        secondary: {
            main: '#ED254EFF',
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '15px',
                    lineHeight: 'normal',
                    padding: '11px 16px'
                },
                containedPrimary: {
                    backgroundColor: '#17252A',
                    '&:hover': {
                        backgroundColor: '#ED254EFF',
                    }
                },
                containedSecondary: {
                    backgroundColor: '#ED254EFF',
                    '&:hover': {
                        backgroundColor: '#17252A',
                    }
                },
                outlinedPrimary: {
                    padding: '10px 16px',
                    border: '1px solid #17252A',
                    '&:hover': {
                        color: '#ED254EFF',
                        backgroundColor: '#ffffff',
                        border: '1px solid #ED254EFF',
                    }
                },
                outlinedSecondary: {
                    padding: '10px 16px',
                    border: '1px solid #ED254EFF',
                    '&:hover': {
                        color: '#17252A',
                        backgroundColor: '#ffffff',
                        border: '1px solid #17252A',
                    }
                }
            },
        }
    },
});
/*
#1a4a5a
#2e8d8d
#c1e1a8
#efbc75
*/
export default theme;
