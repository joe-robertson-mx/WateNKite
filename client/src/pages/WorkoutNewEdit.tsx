import React from 'react';
import {useState, useEffect} from 'react';
import {Button, Box, TextField } from '@mui/material';
import PageLayout from '../components/PageLayout';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment, {Moment} from 'moment';
import { createWorkout, fetchWorkout, updateWorkout } from '../services/WorkoutService';
import { Workout, MongoResponse } from '../../typings/DataModel';
import { useParams } from "react-router";


export default function WorkoutNewEdit() {

    const params = useParams();
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<Moment|null>(moment());
    const [workout, setWorkout] = useState<Workout>();
    const [updateDB, setUpdateDB] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event) {
        setName(event.target.value);
        }
    };

    const getSetWorkout = (id: string) => {
        fetchWorkout(id).then((data) => {
            setWorkout(data);
        })
    }

    const updateWorkoutDB = (workout: Workout) => {
        updateWorkout(workout).then((data: Response) => {
            if (data.ok) {
                window.open (`/setoverview/${workout._id}`, "_self");
            }
        })
    }

    useEffect(() => {
        if (params.workoutid) {
            getSetWorkout(params.workoutid);
        }
    }, [params.workoutid]);

    useEffect(() => {
        if (workout && !updateDB) {
            setName(workout.name);
            setDate(moment(workout.date));
        }

        if (workout && updateDB) {
            console.dir(workout);
            updateWorkoutDB(workout);
            setUpdateDB(false);
        }
    }, [workout, updateDB]);
    
    const saveWorkout = async () => {
        if (name && date) {
            console.log("saving workout");
            if (workout) {
                console.log (name, date)
                setUpdateDB(true);
                setWorkout (prevState => ({...prevState!, name: name, date: date.toString()}));
            }

            else {
                const newWorkout: Workout = {
                    name: name,
                    date: date.toString()
                }

                const response = await createWorkout(newWorkout);

                if (response.ok) {
                    const data: MongoResponse = await response.json();
                    console.dir(data);
                    window.open (`/setoverview/${data.insertedId}`, "_self");
                }
            }
            
        }
    }

    return (
        <PageLayout title={workout? 'Workout - Edit' : 'Workout - New'}>
            <Box>
            <TextField
                label="Name"
                id="name"
                value={name}
                sx={{ m: 3}}
                onChange={handleChange}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                    label="Date"
                    value={date}
                    onChange={(newValue) => {setDate(newValue)}}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </Box>

            <Button variant="contained" sx={{m: 1}} onClick = {()=>saveWorkout()}>Save</Button>
            <Button variant="contained" sx={{m:1}} href="/">Cancel</Button>
        </PageLayout>
    );
    }
