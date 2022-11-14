import React, {useState, useEffect} from 'react';
import {Button, Skeleton} from '@mui/material';
import WorkoutList from '../components/WorkoutList';
import PageLayout from '../components/PageLayout';
import { fetchAllWorkouts } from '../services/WorkoutService';
import {ListSkeleton} from '../components/Skeleton';
import {Workout} from '../../typings/DataModel';
import { DeleteAllButton } from '../components/DeleteAllButton';


export default function WorkoutOverview() {

    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getWorkouts = () => {
        fetchAllWorkouts().then((data) => {
            if (data !== undefined ) {
            setWorkouts(data);
            setLoading(false);
            }
        })
    }

    useEffect(() => {
        getWorkouts();
    }, []);

    return (
        <PageLayout title='Workout Overview'>
            {!loading ? <WorkoutList workouts={workouts}/> : <ListSkeleton />} 
            {!loading ?
                <Button 
                    variant="contained" 
                    fullWidth={true}
                    href="/workoutedit/">
                        New Workout
                </Button> : <Skeleton variant="rectangular" width={200} height={40} />}
                <DeleteAllButton />
        </PageLayout>
    );
}
