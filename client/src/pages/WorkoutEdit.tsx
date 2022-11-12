import React from 'react';
import {useState} from 'react';
import {Button, Box, TextField } from '@mui/material';
import PageLayout from '../components/PageLayout';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import {Moment} from 'moment';

interface State {
    name: string;
    date: Moment;
}

export default function WorkoutEdit({name, date}:State) {

    const [values, setValues] = useState<State>({
        name: name,
        date: date
      });

    const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event) {
        setValues({ ...values, [prop]: event.target.value });
        }
    };

    const handleDateChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement> | null) => {
        if (event) {
        setValues({ ...values, [prop]: event.target.value });
        }
    };

    return (
        <PageLayout title='Workout - Edit'>
            <Box>
            <TextField
                label="Name"
                id="name"
                sx={{ m: 3}}
                onChange={handleChange('name')}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                    label="Date"
                    value={values.date}
                    onChange={handleDateChange('date')}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </Box>

            <Button variant="contained" sx={{m: 1}}>Save</Button>
            <Button variant="contained" sx={{m:1}}>Cancel</Button>
        </PageLayout>
    );
    }
