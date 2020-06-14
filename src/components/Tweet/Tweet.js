import React from 'react';
import { TwitterShareButton } from 'react-share';
import { withStyles } from '@material-ui/core/styles';
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
        },
    })(Button);

    // check props for most recent/highest achievement
    let message;
    if (achievement) {
        message = `@NYCMayor By cutting the NYPD budget, I managed to fund ${achievement.outcomeNumber} ${data[achievement.name].impact}! See what you can change:`;
    }

    return (
        <React.Fragment>
       { achievement &&
        <TwitterShareButton 
            title={message} 
            url={url}>
            <TweetButton><img src={twitterIcon} alt='tweet' className="icon" /> Tweet DeBlasio!</TweetButton>
        </TwitterShareButton> }
        </React.Fragment>
    )
}

export default Tweet;
