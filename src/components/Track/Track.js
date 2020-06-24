import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Tweet from '../Tweet/Tweet';
import { data } from '../../config.js';
import './Track.css';

const Track = (props) => {
    const { outcomes, categories, getCategoryById, policeAmount } = props;

    const ImpactCard = withStyles({
        root: {
            display:'flex',
            alignItems: 'center',
            boxShadow: 'none',
            background: '#F1E7DE',
            border: '2px solid #000000',
            height: '96px',
            margin: '3px'
        }
    })(Card);

    return (
        <React.Fragment>
            <Typography variant="h2" display="inline">Track the&nbsp;</Typography>
            <Typography variant="h2" display="inline" color="textSecondary">Impact</Typography>
            <Grid container className="card__container">
                { outcomes.length === 0 ? <Grid item sm={12} md={12} className="card__placeholder">Your impact here.</Grid> :
                    outcomes.map(outcomeCategory => {
                        const category = getCategoryById(categories, outcomeCategory);
                        return (
                            <Grid item sm={12} md={3} style={{flexGrow: '1'}}>
                                <ImpactCard>
                                    <img src={data[category.name].image} className="card__image" alt="IMG" />
                                    <p className="card__text">You {data[category.name].sentence} {category.outcomeNumber.toLocaleString()} {data[category.name].impact}!</p>
                                </ImpactCard>
                            </Grid>
                        );
                    })}
            </Grid>
            <Tweet category={getCategoryById(categories, outcomes[0])} policeAmount={policeAmount} />
      </React.Fragment>
    )
}

export default Track;
