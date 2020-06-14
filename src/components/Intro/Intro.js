import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Intro.css';

const Intro = () => (
    <div className="intro">
        <Typography variant="h1">The NYPD spent </Typography>
        <Typography variant="h1" color="textSecondary" display="inline">$5 billion</Typography> 
        <Typography variant="h1" gutterBottom={true}> in 2019.</Typography>
        <Typography variant="h4" gutterBottom={true}>How would you spend that money?</Typography>
        <Box mt={3} p={2} border={2} className="intro__instructions">
            Instructions: Grab the bars to increase or decrease budget spending. <br />
            Defund the police.
        </Box>
    </div>
)

export default Intro;
