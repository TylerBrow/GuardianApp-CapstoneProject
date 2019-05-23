import React from 'react'
import "./Logo.css"
import Navbar from '../nav/Navbar';
import {Link} from 'react-router-dom'

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <h1><Link to='/'>Guardian</Link></h1>
                <div className="navdiv">
                    <Navbar props={this.props} />
                </div>
            </div>
            
        )
    }
}

export default Logo