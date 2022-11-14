import React from 'react';
import {Button} from '@mui/material';
import {deleteAllRecords} from '../services/WorkoutService';
import {Delete} from '@mui/icons-material';

export function DeleteAllButton() {

    const deleteAll = async () => {
        await deleteAllRecords();
        window.location.reload();
    }

    return (
        <Button 
            variant="contained" 
            color="error"
            startIcon={<Delete />}
            sx={{m: 1, position: 'absolute', right: 50, bottom: 50}} 
            onClick = {()=>deleteAll()}
        >
                Delete All
        </Button>
    )
}