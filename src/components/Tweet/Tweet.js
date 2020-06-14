import React from 'react';
import { TwitterShareButton } from 'react-share';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import twitterIcon from '../../assets/tweet.png';
import { url } from '../../config';
import './Tweet.css';

const Tweet = (props) => {
    const TweetButton = withStyles({
        root: {
            textTransform: 'none',
            background: '#4B68C0',
            fontWeight: '700',
            '&:hover': {
                background: 'rgba(75, 104, 192, 0.85)'
            },
        },
    })(Button);

    // check props for most recent/highest achievement
    let message = `@NYCMayor By cutting the NYPD budget, I managed to: [replace this quote with some of the outcome data from state], and more! See what you can change!`;

    return (
        <TwitterShareButton 
            title={message} 
            url={url}>
            <TweetButton><img src={twitterIcon} alt='tweet' className="icon" /> Tweet DeBlasio!</TweetButton>
        </TwitterShareButton>
    )
}

export default Tweet;
