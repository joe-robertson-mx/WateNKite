import React from 'react';
import {Button} from '@mui/material';
import WeightList from '../components/WeightList';
import PageLayout from '../components/PageLayout';

export default function SetOverview() {
    return (
        <PageLayout title='Set Overview'>
            <WeightList />
            <Button 
                variant="contained" 
                fullWidth={true}
                href="/setedit">
                    Add Set
            </Button>
        </PageLayout>
    );
    }
