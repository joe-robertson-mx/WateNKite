import React from 'react';
import {List, Box, Divider} from '@mui/material';
import WorkoutListItem from './WorkoutListItem';

export default function WeightList () {

    const WorkoutData = [
        {
            name: 'Big Chest Day',
            date: new Date(),
            id: 1
        },
        {
            name: 'Big Back Day',
            date: new Date(),
            id: 2
        },
        {
            name: 'Big Legs Day',  
            date: new Date(),
            id: 3
        }
    ]

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
            {WorkoutData.map((item) => (
                <React.Fragment key={item.id}>
                <WorkoutListItem name={item.name} date={item.date} />
                <Divider />
                </React.Fragment>
            ))}
        </List>
        </Box>)
}
