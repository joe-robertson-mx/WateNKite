import React from 'react';
import { ListItem, ListItemButton, ListItemText, Typography, IconButton, Avatar} from '@mui/material';
import {FitnessCenter, Delete, Edit} from '@mui/icons-material';
import { deleteRecord } from '../services/WorkoutService';
import { purple } from '@mui/material/colors';

export interface WeightListItemProps {
    date: string;
    name: string;
    id: string;
}

export default function WeightListItem ({id, name, date}:WeightListItemProps) {

    const handleDelete = () => {
        deleteRecord(id).then(() => {
            window.location.reload();
        })
    }

    const handleEdit = () => {
        window.location.href = `/workoutedit/${id}`;
    }

    return (
        <ListItem disablePadding>
        <ListItemButton>
          <Avatar sx={{ bgcolor: purple[900], mr:2 }}>
            <FitnessCenter />
          </Avatar>
          <ListItemText primary={name} 
          secondary = {
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {date}
              </Typography>
            </React.Fragment>
          } />
        </ListItemButton>
        <IconButton edge="end" aria-label="edit" size="small" onClick={handleEdit}>
            <Edit />
        </IconButton>
        <IconButton edge="end" aria-label="delete" color="error" size="small" onClick={handleDelete}>
            <Delete />
        </IconButton>
      </ListItem>
    )
}