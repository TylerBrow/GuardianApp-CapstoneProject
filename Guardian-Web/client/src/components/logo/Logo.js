import React from 'react'
import "./Logo.css"
import Navbar from '../nav/Navbar';


class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <h1>Guardian</h1>
                <div className="navdiv">
                    <Navbar props={this.props} />
                </div>
            </div>
            
        )
    }
}

export default Logo