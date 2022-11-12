import React from 'react';
import {useState} from 'react';
import {Button, Box, Autocomplete, TextField, InputAdornment} from '@mui/material';
import PageLayout from '../components/PageLayout';

interface State {
    weight: number;
    reps: number;
    type: string;
}

export default function SetEdit({weight, reps, type}:State) {
    const workouts = ["Bench Press", "Shoulder Press", "Deadlift", "Squat", "Bench Press"]

    const [values, setValues] = useState<State>({
        weight: weight,
        reps: reps,
        type: type
      });

    const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <PageLayout title='Set - Edit'>
            <Box>
            <Autocomplete
                disablePortal
                id="workout-type-selector"
                options={workouts}
                sx={{ m: 3 }}
                renderInput={(params) => <TextField {...params} label="Workout" />}
                />
            <TextField
                label="Weight"
                id="weight"
                sx={{ m: 3}}
                InputProps={{
                    startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                }}
                onChange={handleChange('weight')}
                />
            <TextField
                label="Reps"
                id='reps'
                sx={{ m: 3}}
                onChange={handleChange('reps')}
            />
            </Box>

            <Button variant="contained" sx={{m: 1}}>Save</Button>
            <Button variant="contained" sx={{m:1}}>Cancel</Button>
        </PageLayout>
    );
    }
