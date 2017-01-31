import React from 'react'
import {Router, Route, IndexRedirect, browserHistory } from 'react-router'

class Hello extends React.Component {
    render() {
        return (
            <p>hello {this.props.name}</p>
        )
    }
}

export default Hello
