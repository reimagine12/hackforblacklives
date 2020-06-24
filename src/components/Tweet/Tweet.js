import React from 'react';
import { TwitterShareButton } from 'react-share';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import twitterIcon from '../../assets/tweet.png';
import { url, data } from '../../config';

import './Tweet.css';

const Tweet = (props) => {
    const achievement = props.category;
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
    if (achievement) {
        message = `@NYCMayor By cutting the NYPD budget, I ${data[achievement.name].sentence} ${achievement.outcomeNumber.toLocaleString()} ${data[achievement.name].impact}! See what you can change:`;
    }

    return (
        <React.Fragment>
       { achievement &&
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
