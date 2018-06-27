import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './routes';
import store from './store';
import './App.css';
import { Layout } from './components';
import { updateAppState } from './store/AppStore/actions';

export const history = createBrowserHistory({});

class App extends Component {

  componentWillMount() {
    const mq = window.matchMedia("(max-width: 400px)");
    mq.addListener((mq) => store.dispatch(updateAppState({ isMobile: mq.matches })));
    store.dispatch(updateAppState({ isMobile: mq.matches }));
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Layout>
              {routes.map((route, i) => <Route key={i} {...route} />)}
            </Layout>
          </Switch>
        </Router>
      </Provider>
    );
  }

}

export default App;
