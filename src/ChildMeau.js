import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import ChlidContent from './ChildContent';

export default class ChlidMeau extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { match } = this.props;
        console.log(match);
        return (
          <div>
            <h2>router</h2>
            <ul>
              <li><Link to={`${match.path}/message/chlid1`}>子菜单1</Link></li>
              <li><Link to={`${match.path}/message/chlid2`}>子菜单2</Link></li>
            </ul>
            <Route path={`${match.path}/message/:id`} component={ChlidContent} />
            <Route path={`/message/parentToClild`} component={()=><div>从父菜单直接跳入子菜单</div>} />
          </div>
        )
    }
}