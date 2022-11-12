import React from 'react';
import { ListItem, ListItemButton, ListItemText, Typography, IconButton, Avatar} from '@mui/material';
import {FitnessCenter, Delete, Edit} from '@mui/icons-material';
import { purple } from '@mui/material/colors';

export interface WeightListItemProps {
    date: Date;
    name: string;
}

export default function WeightListItem ({name, date}:WeightListItemProps) {

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
                {date.toDateString()}
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