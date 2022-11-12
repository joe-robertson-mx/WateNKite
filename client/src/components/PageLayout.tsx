import React from 'react';
import {BottomNavigation, BottomNavigationAction, Box, AppBar, Typography, Toolbar} from '@mui/material';
import {Home, FitnessCenter, Settings, Api} from '@mui/icons-material';

export interface PageLayoutProps {
    children: React.ReactNode;
    title: string;
}

export default function PageLayout({children, title}: PageLayoutProps) {

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Api sx={{ mr: 3 }}/>
                <Typography variant="h6" 
                sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}>
                    WATES
                </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{padding: '15px'}}>
            <Typography variant="h4">
                {title}
            </Typography>
                {children}
            </Box>
            <BottomNavigation showLabels>
                <BottomNavigationAction label="Home" href="/" icon={<Home />} />
                <BottomNavigationAction label="New Workout" href="/workoutedit" icon={<FitnessCenter />} />
                <BottomNavigationAction label="Settings" icon={<Settings />} />
            </BottomNavigation>
        </React.Fragment>
    )
}