import React from 'react';
import { data } from '../../config.js';
import getCategoryById from '../../util/chartUtil.js'
// import './Track.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const Track = (props) => {
    const { outcomes, categories } = props;

    return (
        <div className="chart__track" style={{position: 'relative', height: '600px', display: 'flex', flexDirection: 'column'}}>
          <Typography variant="h2">Track the</Typography>
          <Typography variant="h2" gutterBottom={true} color="textSecondary" display="inline">Impact</Typography>
            <div style={{width: '100%', border: '10px solid rgba(255, 255, 255, 0.5)', overflow: 'auto', maxHeight: '100%'}}>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                  <b>Look what you've done!</b>
                </ListItem>
              { outcomes.map(outcomeCategory => {
                const category = getCategoryById(categories, outcomeCategory);
                return (
                  <div>
                    <Divider style={{border: '2px solid rgba(255, 255, 255, 0.5)'}}/>
                    <ListItem button>
                      <ListItemIcon>
                        <img src={data[category.name].image} style={{marginRight: '15px', height: '65px'}} alt="IMG"></img>
                      </ListItemIcon>
                      You funded {category.outcomeNumber.toLocaleString()} {data[category.name].impact}!
                    </ListItem>
                  </div>
                );
              })}
              </List>
            </div>
        </div>
    )
}

export default Track;
