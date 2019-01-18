import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/layout/Header';
import Posts from './components/posts/Posts';
import CurrentPost from './components/pages/CurrentPost';
import Add from './components/pages/Add';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <div className="container col-md-8 col-xl-6">
              <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/add" component={Add} />
                <Route exact path="/post/:id" component={CurrentPost} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
