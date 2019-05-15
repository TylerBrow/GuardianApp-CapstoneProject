import React from 'react'
import { Provider } from "react-redux"
import store from "../../store"
// import { BrowserRouter as Router, Route } from "react-router-dom"
import "./Logo.css"

const Logo = props => {
    return (
        <Provider store={store}>
            <div className="logo">
                <h1>Guardian</h1>
            </div>
        </Provider>
    )
  }
export default Logo