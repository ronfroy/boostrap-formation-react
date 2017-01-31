import React from 'react'
import {Router, Route, IndexRedirect, browserHistory } from 'react-router'

import Layout from './layout'
import Page1 from './page1'
import Page2 from './page2'

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route component={Layout} path="/">
                    <IndexRedirect to="page1" />
                    <Route component={Page1} path="page1" />
                    <Route component={Page2} path="page2" />
                </Route>
            </Router>
        )
    }
}

export default AppRouter
