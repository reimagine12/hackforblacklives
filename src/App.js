import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './routes/Main';
import { Provider, observer } from 'mobx-react';
import Store from './stores/store.js';


const store = new Store();

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Route exact path='/' component={Main} />
      </Router>
    </Provider>
  );
}

export default (observer(App));
