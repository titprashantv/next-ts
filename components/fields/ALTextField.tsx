import * as React from 'react';
import {useState} from "react";
import {TextField, InputAdornment, IconButton} from '@mui/material';
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

const MaterialIcon = (props: any) => {
    switch (props.icon) {
        case 'Email':
            return <Email color="primary"/>;
        default:
            return null
    }
};

export default function ALTextField(props: Props) {
    const {type, name, label, value, onChange, inputAdornment, error, helperText} = props;

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="al-text-field">
            {!inputAdornment.isShow &&
            <TextField type={type} name={name} label={label} value={value} onChange={onChange} error={error} helperText={helperText} fullWidth size="small"/>
            }

            {inputAdornment.isShow && inputAdornment.type === 'start' &&
            <TextField type={type} name={name} label={label} value={value} onChange={onChange} error={error} helperText={helperText} fullWidth size="small"
                       InputProps={{startAdornment: <InputAdornment position="start"><MaterialIcon icon={inputAdornment.icon}/></InputAdornment>}}/>
            }

            {inputAdornment.isShow && inputAdornment.type === 'end' &&
            <TextField type={type} name={name} label={label} value={value} onChange={onChange} error={error} helperText={helperText} fullWidth size="small"
                       InputProps={{endAdornment: <InputAdornment position="end"><MaterialIcon icon={inputAdornment.icon}/></InputAdornment>}}/>
            }

            {inputAdornment.isShow && inputAdornment.type === 'password' &&
            <TextField type={showPassword ? 'text' : 'password'} name={name} label={label} value={value} onChange={onChange} error={error} helperText={helperText}
                       fullWidth size="small"
                       InputProps={{
                           startAdornment: <InputAdornment position="start"><Lock color="primary"/></InputAdornment>,
                           endAdornment: (
                               <InputAdornment position="end">
                                   <IconButton onClick={handleClickShowPassword}>
                                       {showPassword ? <VisibilityOff color="action"/> : <Visibility color="action"/>}
                                   </IconButton>
                               </InputAdornment>
                           ),
                       }}
            />
            }
        </div>
    );
};

// Simple Field : inputAdornment={{'isShow': false}}
// Start Adornment Field : inputAdornment={{'isShow': true, 'type': 'start', 'icon': 'Email'}}
// End Adornment Field : inputAdornment={{'isShow': true, 'type': 'start', 'icon': 'Email'}}
// Password Field : inputAdornment={{'isShow': true, 'type': 'password'}}