import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const NonProfits = () => (
    <Grid container sm={12} md={9} spacing={2}>
        <Grid item sm={12} md={10}>
            <Typography variant="h2" gutterBottom="true">
                Make an <br /><Typography variant="h2" color="textSecondary" display="inline">Impact</Typography>
            </Typography>
        </Grid>
        <Grid item sm={12} md={4}>
            [Image]
            <Button>Visit Website</Button>
        </Grid>
        <Grid item sm={12} md={4}>
            [Image]
            <Button>Visit Website</Button>
        </Grid>
        <Grid item sm={12} md={4}>
            [Image]
            <Button>Visit Website</Button>
        </Grid>
    </Grid>
)

export default NonProfits;
