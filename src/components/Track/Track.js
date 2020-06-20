import React from 'react';
import Typography from '@material-ui/core/Typography';
import { data } from '../../config.js';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

// import './Track.css';

const Track = (props) => {
    const { outcomes, categories, getCategoryById } = props;

    return (
        // <div className="chart__track" style={{position: 'relative', height: '600px', display: 'flex', flexDirection: 'column'}}>
        //   <Typography variant="h2">Track the</Typography>
        //   <Typography variant="h2" gutterBottom={true} color="textSecondary" display="inline">Impact</Typography>
        //     <div style={{width: '100%', border: '10px solid rgba(255, 255, 255, 0.5)', overflow: 'auto', maxHeight: '100%'}}>
        //       <List>
        //         <ListSubheader color="inherit">
        //           <b>Look what you've done!</b>
        //         </ListSubheader>
        //       { outcomes.map(outcomeCategory => {
        //         const category = getCategoryById(categories, outcomeCategory);
        //         return (
        //           <div>
        //             <Divider style={{border: '2px solid rgba(255, 255, 255, 0.5)'}}/>
        //             <ListItem>
        //               <ListItemIcon>
        //                 <img src={data[category.name].image} style={{marginRight: '15px', height: '65px'}} alt="IMG"></img>
        //               </ListItemIcon>
        //               You funded {category.outcomeNumber.toLocaleString()} {data[category.name].impact}!
        //             </ListItem>
        //           </div>
        //         );
        //       })}
        //       </List>
        //     </div>
        // </div>
        <Grid container>
            <Grid item sm={12} m={12}>
                <Typography variant="h2">Track the</Typography>
                <Typography variant="h2" gutterBottom={true} color="textSecondary" display="inline">Impact</Typography>
            </Grid>
            
            { outcomes.length === 0 ? <Grid item sm={12} m={12} style={{textAlign: 'center', fontStyle: 'italic'}}>Your impact here.</Grid> :
                outcomes.map(outcomeCategory => {
                    const category = getCategoryById(categories, outcomeCategory);
                    return (
                        <Grid item sm={12} md={3}>
                            <Card>
                                <img src={data[category.name].image} style={{marginRight: '15px', height: '65px'}} alt="IMG" />
                                You funded {category.outcomeNumber.toLocaleString()} {data[category.name].impact}!
                            </Card>
                        </Grid>
                    );
                    }
                )}
      </Grid>
    )
}

export default Track;
