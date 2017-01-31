import React from 'react'
import {Link} from 'react-router'

class Layout extends React.Component {

    static propTypes = {
        children: React.PropTypes.object
    }

    render() {
        return (
            <div className="container">
                <ul>
                    <li><Link to="page1" className="nav-link" activeClassName="active">page 1</Link></li>
                    <li><Link to="page2" className="nav-link" activeClassName="active">page 2</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout
