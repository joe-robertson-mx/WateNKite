import React from 'react';
import {List, Box, Divider} from '@mui/material';
import WeightListItem from './WeightListItem';

export default function WeightList () {

    const WeightData = [
        {
            weight: 100,
            reps: 10,
            type: 'Bench Press',
            id: 1
        },
        {
            weight: 100,
            reps: 10,
            type: 'Shoulder Press',
            id: 2
        },
        {
            weight: 100,
            reps: 10,
            type: 'Deadlift',
            id: 3
        },
        {
            weight: 100,
            reps: 10,
            type: 'Squat',
            id: 4
        }
    ]

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
            {WeightData.map((item) => (
                <React.Fragment key={item.type}>
                <WeightListItem weight={item.weight} reps={item.reps} type={item.type} />
                <Divider />
                </React.Fragment>
            ))}
        </List>
        </Box>)
}
