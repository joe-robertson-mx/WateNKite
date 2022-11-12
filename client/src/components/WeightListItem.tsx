import React from 'react';
import { ListItem, ListItemButton, ListItemText, ListItemIcon, Typography, IconButton} from '@mui/material';
import {FitnessCenter, Delete, Edit} from '@mui/icons-material';

export interface WeightListItemProps {
    weight: number;
    reps: number;
    type: string;
}

export default function WeightListItem ({weight, reps, type}:WeightListItemProps) {

    const title = `${weight}kg x ${reps}`

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
        <IconButton edge="end" aria-label="edit" size="small">
            <Edit />
        </IconButton>
        <IconButton edge="end" aria-label="delete" color="error" size="small">
            <Delete />
        </IconButton>
      </ListItem>
    )
}