import React from 'react';
import {List, Box, Divider} from '@mui/material';
import SetListItem from './SetListItem';
import {Set} from '../../typings/DataModel';

export interface SetListProps {
    sets: Set[];
    workoutid: string;
}

export default function SetList ({sets, workoutid}: SetListProps) {
    
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <List>
            {sets.map((item) => (
                <React.Fragment key={item._id}>
                <SetListItem id={item._id!} weight={item.weight} reps={item.reps} type={item.type} workoutid={workoutid}  />
                <Divider />
                </React.Fragment>
            ))}
        </List>
        </Box>)
}
