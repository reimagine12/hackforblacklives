import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Intro.css';

const Intro = () => (
    <div className="intro">
        <Typography variant="h1">The NYPD spent </Typography>
        <Typography variant="h1" color="textSecondary" display="inline">$5 billion</Typography> 
        <Typography variant="h1" gutterBottom={true}> in 2019.</Typography>
        <Typography variant="h4" gutterBottom={true}>How would you reallocate these funds?</Typography>
        <Box mt={2} p={1} border={2} className="intro__instructions">
        Instructions: Drag the top of the bar on each social services 
        category to increase its budget by pulling funds from the NYPD budget.
        </Box>
    </div>
)

export default Intro;
