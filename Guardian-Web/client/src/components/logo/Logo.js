import React from 'react'
import { Provider } from "react-redux"
import store from "../../store"
// import { BrowserRouter as Router, Route } from "react-router-dom"
import "./Logo.css"
import Navbar from '../nav/Navbar';


class Logo extends React.Component {
    render() {
        console.log("this.props in Logo.js: " + this.props)
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