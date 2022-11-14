import React, {useEffect, useState} from 'react';
import {Button} from '@mui/material';
import SetList from '../components/SetList';
import PageLayout from '../components/PageLayout';
import { useParams, useNavigate } from "react-router";
import { Workout, Set } from '../../typings/DataModel'
import {ListSkeleton} from '../components/Skeleton';
import {Skeleton} from '@mui/material';
import { fetchWorkout, fetchSetsFromWorkout } from '../services/WorkoutService';


export default function SetOverview() {

    const [workout, setWorkout] = useState<Workout>();
    const [sets, setSets] = useState<Set[]>([]);

    const params = useParams();
    const navigate = useNavigate();

    const getSetWorkout = (id: string) => {
        fetchWorkout(id).then((data) => {
            setWorkout(data);
        })
    } 

    useEffect(() => {
        if (params.workoutid) {
            getSetWorkout(params.workoutid);
        }
    }, [params.workoutid, navigate]);

    useEffect(() => {
        if (workout) {
            fetchSetsFromWorkout(workout._id!).then((data) => {
                if (data) {
                    setSets(data);
                }
            })
        }
    }, [workout, navigate])

    return (
            <PageLayout title={workout? `${workout?.name} - Sets` : ''}>
                {workout ? <SetList sets={sets ? sets : []} workoutid={workout._id!} /> : <ListSkeleton />}
                {workout ? <Button variant="contained" fullWidth={true} href={`/setedit/${workout._id}`}>Add Set</Button> : <Skeleton variant="rectangular" width={50} height={10} />}
            </PageLayout>
        );
 }

