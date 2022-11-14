import React from 'react';
import {useState, useEffect} from 'react';
import {Button, Box, Autocomplete, TextField, InputAdornment, Skeleton} from '@mui/material';
import PageLayout from '../components/PageLayout';
import { useParams } from "react-router";
import { fetchWorkout, fetchSet, updateSet, createSet } from '../services/WorkoutService';
import { Workout, Set } from '../../typings/DataModel';

export default function SetEdit() {
    const workouts = ["Bench Press", "Shoulder Press", "Deadlift", "Squat"]

    const params = useParams();
    const [set, setSet] = useState<Set>({ weight: 100, reps: 5, type: workouts[0], parent: params.workoutid! });
    const [updateDB, setUpdateDB] = useState<boolean>(false);
    const [workout, setWorkout] = useState<Workout>();
    const [typeInput, setTypeInput] = useState<string>(workouts[0]);


    const getSet = (id: string) => {
        fetchSet(id).then((data) => {
            if (data) {
                setSet(data);
            }
        })
    }

    const getSetWorkout = (id: string) => {
        fetchWorkout(id).then((data) => {
            if(data) {
                setWorkout(data);
            }
        })
    }

    const createSetOpen = () => {
        createSet(set).then((response) => {
            if(response.ok) {
                window.open (`/setoverview/${params.workoutid}`, "_self");
            }
        })
    }

    const updateSetDB = (set: Set) => {
        updateSet(set).then((data: Response) => {
            if (data.ok) {
                window.open (`/setoverview/${params.workoutid}`, "_self");
            }
        })
    }


    useEffect(() => {
        if (set && updateDB) {
            console.dir(set);
            updateSetDB(set);
            setUpdateDB(false);
        }
    }, [set, updateDB]);    
    
    
    useEffect(() => {
        if (params.setid) {
            getSet(params.setid);
        }
    }, [params.setid]);
    
    useEffect(() => {
        if (params.workoutid) {
            getSetWorkout(params.workoutid);
        }
    }, [params.workoutid]);

    const handleChange =
    (prop: keyof Set) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setSet({ ...set, [prop]: event.target.value });
    };

    const saveSet = async () => {
        if (set && set.weight && set.reps && set.type) {
            console.log("saving set");
            if (set._id) {
                setUpdateDB(true);
            }

            else
            {
                createSetOpen();
            }
            //Create new set
        }
    }

    return (
        <PageLayout title={workout? `${workout?.name} - New Set` : ''}>
            {set ? 
                <Box>
                    <Autocomplete
                        disablePortal
                        id="workout-type-selector"
                        options={workouts}
                        inputValue={typeInput}
                        onInputChange={(event, newInputValue) => {
                          setTypeInput(newInputValue);
                        }}
                        value={set.type}
                        onChange={(event, newValue) => {
                          setSet({...set, type: newValue!});
                        }}
                        sx={{ m: 3 }}
                        renderInput={(params) => <TextField {...params} label="Workout" />}
                        />
                    <TextField
                        label="Weight"
                        id="weight"
                        value={set.weight}
                        sx={{ m: 3}}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                        onChange={handleChange('weight')}
                        />
                    <TextField
                        label="Reps"
                        id='reps'
                        value={set.reps}
                        sx={{ m: 3}}
                        onChange={handleChange('reps')}
                    />
                </Box>
                : <Skeleton variant="rounded" width={210} height={350} />}

            <Button variant="contained" sx={{m: 1}} onClick={()=>saveSet()}>Save</Button>
            <Button variant="contained" sx={{m:1}} href="/">Cancel</Button>
        </PageLayout>
    );
    }
