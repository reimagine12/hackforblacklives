import React from 'react';
import { TwitterShareButton } from 'react-share';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import twitterIcon from '../../assets/tweet.png';
import { url, data } from '../../config';

import './Tweet.css';

const Tweet = (props) => {
    const { category, policeAmount } = props;

    const percentDecrease = () => {
        console.log('current police amount', policeAmount.amount)
        let percent = (policeAmount.amount - data.police.initial_amount) / data.police.initial_amount * 100;
        console.log('percent', percent)
        if (percent <= -100) {
            return 100;
        }

        if ( percent < 0) { 
            return percent.toFixed(1) * -1;
        }

        return percent.toFixed(1);
    }

    const TweetButton = withStyles({
        root: {
            textTransform: 'none',
            background: '#4B68C0',
            fontWeight: '700',
            marginTop: '40px',
            '&:hover': {
                background: 'rgba(75, 104, 192, 0.85)'
            },
            width: '100%',
        },
    })(Button);

    // check props for most recent/highest achievement
    let message;
    if (category) {
        message = `@NYCMayor By cutting the NYPD budget by ${percentDecrease()}%, I ${data[category.name].sentence} ${category.outcomeNumber.toLocaleString()} ${data[category.name].impact}! See what you can change:`;
    }

    return (
        <React.Fragment>
       { category &&
            <Grid container className='tweet__container'>
                <Grid item sm={12} md={3} style={{flexGrow: '1', justifyContent: 'flex-end'}}>
                    <TwitterShareButton 
                        style={{width: '100%'}}
                        title={message} 
                        url={url}>
                        <TweetButton><img src={twitterIcon} alt='tweet' className='tweet__icon' /> Tweet DeBlasio!</TweetButton>
                    </TwitterShareButton>
                </Grid>
            </Grid>
         }
        </React.Fragment>
    )
}

export default Tweet;
