import React, { Component } from 'react';

export default class ChlidContent extends Component {
    render(){
        const { match, location } = this.props;
        console.log(match);
        console.log(location);
        const { params: { id } } = match;
        return <h3>{id}</h3>;
    }
}