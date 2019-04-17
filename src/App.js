import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import logo from './logo.svg';
import './App.css';
import { cpus } from 'os';
import MeauOne from './MeauOne';
import ChildMeau from './ChildMeau';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.showOther = this.showOther.bind(this);
  }

  showOther() {
    return <div> render other </div>
  }

  render() {
    const history = createBrowserHistory();
    return (
      <div className="App">
        <Router history={history}>
         <>
            <div className="left">
              <ul>
                <li><Link to="/">菜单1</Link></li>
                <li><Link to="/menu2">有子菜单的菜单</Link></li>
                
              </ul>
            </div>
            <div className="right">
              <Switch>
                <Route path="/" exact component={MeauOne} />
                <Route path="/menu2" component={ChildMeau} />
              </Switch>
            </div>
          </>
        </Router>
      </div>
    );
  }
}
