import * as React from 'react';
import {useState} from "react";
//import theme from "../../src/theme";
import theme from "/src/theme";
import {Typography, Grid, Button} from '@mui/material';
import AuthLayout from "/components/AuthLayout";
//import AuthLayout from "../../components/AuthLayout";
//import ALTextField from "../../components/fields/ALTextField";
import ALTextField from "/components/fields/ALTextField";

export default function Login() {

    const [values, setValues] = useState({
        userName: '',
        passWord: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    const handleSubmit = () => {
      console.log('values',values);
    };

    return (
        <AuthLayout pageTitle="Login">
            <div className="auth-title">
                <Typography variant="h1" sx={{color: theme.palette.secondary.dark}}>
                    Login
                </Typography>
            </div>

            <div className="auth-fields">
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <ALTextField type="text" name="userName" label="Username or Email *" value={values.userName} onChange={handleChange}
                                         inputAdornment={{'isShow': true, 'type': 'start', 'icon': 'Email'}} error={true} helperText={' '}/>
                        </Grid>

                        <Grid item xs={12}>
                            <ALTextField type="password" name="passWord" label="Password *" value={values.passWord} onChange={handleChange}
                                         inputAdornment={{'isShow': true, 'type': 'password'}} error={true} helperText={' '}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" sx={{width: '100%'}} onClick={handleSubmit}>Login</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </AuthLayout>
    );
};
