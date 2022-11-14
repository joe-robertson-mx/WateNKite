import React from 'react';
import { ListItem, ListItemButton, ListItemText, ListItemIcon, Typography, IconButton} from '@mui/material';
import {FitnessCenter, Delete, Edit} from '@mui/icons-material';
import { deleteRecord } from '../services/WorkoutService';

export interface SetListItemProps {
    id: string;
    weight: number;
    reps: number;
    type: string;
    workoutid: string;
}

export default function SetListItem ({id, weight, reps, type, workoutid}:SetListItemProps) {

    const title = `${weight}kg x ${reps}`

    const handleDelete = () => {
        deleteRecord(id).then(() => {
            window.location.reload();
        })
    }


    return (
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <FitnessCenter />
          </ListItemIcon>
          <ListItemText primary={type} 
          secondary = {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {title}
              </Typography>
            </React.Fragment>
          } />
        </ListItemButton>
        <IconButton edge="end" aria-label="edit" size="small" href={`/setedit/${workoutid}/${id}`}>
            <Edit />
        </IconButton>
        <IconButton edge="end" aria-label="delete" color="error" size="small" onClick={handleDelete}>
            <Delete />
        </IconButton>
      </ListItem>
    )
}