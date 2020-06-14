import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import cpr from './assets/logo.jpg';

import { nonProfits } from '../../config.js';
import './NonProfits.css'


const NonProfits = () => (
  <Grid container spacing={2}>
    <Grid item sm={12} md={10}>
      <Typography variant="h2">Make an </Typography>
      <Typography variant="h2" gutterBottom={true} color="textSecondary" display="inline">Impact</Typography>
    </Grid>
    <div className='cards__container'>
    { nonProfits.map(nonProfit => (
      <Grid item sm={12} md={4} style={{padding: '10px', textAlign: 'center'}}>
        <Card style={{height: '65%', marginRight: '5px'}}>
          <CardContent>
              {nonProfit.name}
            
         <img src={cpr} alt="Communities United for Police Reform" width="200" height="200" />
   
          </CardContent>
        </Card>
        <Button
          href={nonProfit.path}
          style={{backgroundColor:'white', marginTop: '10px'}}
          variant="contained"
          size="small">
          Visit Website
        </Button>
      </Grid>
      ))
    }
    </div>
  </Grid>
)

export default NonProfits;
