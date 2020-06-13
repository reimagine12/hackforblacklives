import React from 'react';
import Typography from '@material-ui/core/Typography';
import './Intro.css';

const Intro = () => (
    <div className="intro">
        <Typography variant="h1" gutterBottom="true">
            The NYPD spent <br /><Typography variant="h1" color="textSecondary" display="inline">$5 billion</Typography> in 2019.
        </Typography>
        <Typography variant="h3" gutterBottom="true">How would you spend that money?</Typography>
        <div className="intro__instructions">
            <p>
                Instructions: Grab the bars to increase or decrease budget spending. <br />
                Defund the police.
            </p>
        </div>
    </div>
)

export default Intro;
