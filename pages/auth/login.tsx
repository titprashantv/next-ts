import * as React from 'react';
import {useState} from "react";
import theme from "../../src/theme";
import {Typography, TextField, Grid, Button, InputAdornment, IconButton} from '@mui/material';
import {Email, Lock, Visibility, VisibilityOff} from '@mui/icons-material';
import AuthLayout from "../../components/AuthLayout";

export default function Login() {

    const [values, setValues] = useState({
        userName: '',
        passWord: '',
        showPassword: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
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
                        <TextField type="text" name="userName" label="Username or Email *" value={values.userName} fullWidth size="small" error={false}
                                   helperText=" " onChange={handleChange}
                                   InputProps={{
                                       startAdornment: <InputAdornment position="start"><Email color="primary"/></InputAdornment>,
                                   }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField type={values.showPassword ? 'text' : 'password'} name="passWord" label="Password *" value={values.passWord} onChange={handleChange}
                                   fullWidth size="small" error={false}
                                   helperText=" "
                                   InputProps={{
                                       startAdornment: <InputAdornment position="start"><Lock color="primary"/></InputAdornment>,
                                       endAdornment: (
                                           <InputAdornment position="end">
                                               <IconButton onClick={handleClickShowPassword}>{values.showPassword ? <Visibility color="action"/> : <VisibilityOff color="action"/>}</IconButton>
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