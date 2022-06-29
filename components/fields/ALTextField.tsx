import * as React from 'react';
import {useState} from "react";
import {TextField, InputAdornment} from '@mui/material';
import {Email, Lock, Visibility, VisibilityOff} from '@mui/icons-material';

interface Props {
    type: string;
    name: string;
    label: string;
    value: string;
    onChange: any;
    inputAdornment: any;
    error: boolean;
    helperText: string;
}

export default function ALTextField(props: Props) {
    const {type, name, label, value, onChange, inputAdornment, error, helperText} = props;

    return (
        <div>
            {!inputAdornment.isShow &&
            <TextField type={type} name={name} label={label} value={value} onChange={onChange} error={error} helperText={helperText} fullWidth size="small"
            />}

            {inputAdornment.isShow && inputAdornment.position === 'start' &&
            <TextField type={type} name={name} label={label} value={value} onChange={onChange} error={error} helperText={helperText} fullWidth size="small"
                       InputProps={{startAdornment: <InputAdornment position="start"><Email color="primary"/></InputAdornment>}}
            />}

            {inputAdornment.isShow && inputAdornment.position === 'end' &&
            <TextField type={type} name={name} label={label} value={value} onChange={onChange} error={error} helperText={helperText} fullWidth size="small"
                       InputProps={{endAdornment: <InputAdornment position="end"><Email color="primary"/></InputAdornment>}}
            />}
        </div>
    );
};
