import * as React from 'react';
import {useState} from "react";
import theme from "../../src/theme";
import {Typography, TextField, Grid, Button, InputAdornment, IconButton} from '@mui/material';
import {Email, Lock, Visibility, VisibilityOff} from '@mui/icons-material';

interface Props {
    name: string;
    label: string;
    value: string;
    error: boolean;
    helperText: string;
}

export default function ALTextField(props: Props) {

    const {name, label, value, error, helperText} = props;

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
        <TextField type="text" name={name} label={label} value={value} error={error} helperText={helperText} onChange={handleChange} fullWidth size="small"
                   InputProps={{startAdornment: <InputAdornment position="start"><Email color="primary"/></InputAdornment>}}
        />
    );
};
