import React from 'react';
import {Button} from '@mui/material';
import WorkoutList from '../components/WorkoutList';
import PageLayout from '../components/PageLayout';

export default function WorkoutOverview() {
    return (
        <PageLayout title='Workout Overview'>
            <WorkoutList />
            <Button 
                variant="contained" 
                fullWidth={true}
                href="/workoutedit">
                    New Workout
            </Button>
        </PageLayout>
    );
    }
