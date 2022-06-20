import * as React from 'react';
import {Typography, TextField, Grid, Button, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton} from '@mui/material';
import {Email, Lock, Visibility, VisibilityOff} from '@mui/icons-material';
import AuthLayout from "../../components/AuthLayout";
import theme from "../../src/theme";
import {useState} from "react";
import {width} from "@mui/system";


export default function Login() {

    const [values, setValues] = useState({
        username: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (name) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [name]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <AuthLayout pageTitle="Login">
            <div className="auth-title">
                <Typography variant="h1" sx={{color: theme.palette.secondary.dark}}>
                    Login
                </Typography>
            </div>

            <div className="auth-fields">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField type="text" name="username" label="Username or Email *" value={values.username} fullWidth size="small" error={false}
                                   helperText=" " onChange={handleChange('username')}
                                   InputProps={{
                                       startAdornment: <InputAdornment position="start"><Email/></InputAdornment>,
                                   }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField type={values.showPassword ? 'text' : 'password'} name="passWord" label="Password *" value={values.password} onChange={handleChange('password')}
                                   fullWidth size="small" error={false}
                                   helperText=" "
                                   InputProps={{
                                       startAdornment: <InputAdornment position="start"><Lock/></InputAdornment>,
                                       endAdornment: (
                                           <InputAdornment position="end">
                                               <IconButton onClick={handleClickShowPassword}>{values.showPassword ? <Visibility color="primary"/> : <VisibilityOff color="primary"/>}</IconButton>
                                           </InputAdornment>
                                       ),
                                   }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" sx={{width: '100%'}}>Login</Button>
                    </Grid>
                </Grid>
            </div>
        </AuthLayout>
    );
};
