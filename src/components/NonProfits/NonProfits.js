import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { nonProfits } from '../../config.js';
import './NonProfits.css'


const NonProfits = () => (
  <Grid container spacing={2}>
    <Grid item sm={12} md={12}>
      <Typography variant="h2" display="inline">Make an&nbsp;</Typography>
      <Typography variant="h2" display="inline" color="textSecondary">Impact</Typography>
    </Grid>
    <div className='cards__container'>
    { nonProfits.map(nonProfit => (
      <Grid item sm={12} md={12} style={{padding: '10px', textAlign: 'center'}}>
        <Card style={{height: '85%', marginRight: '5px', backgroundColor: `${nonProfit.color}`}}>
          <CardContent>
              {nonProfit.name}<br/>
              <img src={nonProfit.image} alt="Logo" style={{width:"100px"}} />
          </CardContent>
        </Card>
        <Button
          href={nonProfit.path}
          style={{backgroundColor: 'white', marginTop: '10px'}}
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
