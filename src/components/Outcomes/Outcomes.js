import React from 'react';
import { inject, observer } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { data } from '../../config.js';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


const Outcomes = inject('store')(observer(({store}) => {
  const classes = useStyles();

  return (
   <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Achievements" />
        </ListItem>
        <Divider />
        { store.state.outcomeCategories.map(outcomeCategory => (
          <div>
          <ListItem button>
           You funded { store.state[outcomeCategory].outcomeNumber } {data[outcomeCategory].impact} !
          </ListItem>
          <Divider />
          </div>
          ))}
      </List>
    </div>
  );
}));
export default Outcomes;
