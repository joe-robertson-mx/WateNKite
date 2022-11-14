import React from 'react';
import {List, Box, Divider} from '@mui/material';
import WorkoutListItem from './WorkoutListItem';
import { Workout } from '../../typings/DataModel';

interface WorkoutListProps {
    workouts: Workout[];
}

export default function WorkoutList ({workouts}: WorkoutListProps) {

    console.dir (workouts);

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
            {workouts.map((item) => (
                <React.Fragment key={item._id!}>
                <WorkoutListItem id={item._id!} name={item.name} date={item.date} />
                <Divider />
                </React.Fragment>
            ))}
        </List>
        </Box>)
}
