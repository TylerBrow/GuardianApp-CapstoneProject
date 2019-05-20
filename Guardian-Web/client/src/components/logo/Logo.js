import React, { useEffect, useState } from 'react'
import { Provider } from "react-redux"
import store from "../../store"
// import { BrowserRouter as Router, Route } from "react-router-dom"
import "./Logo.css"
import Navbar from '../nav/Navbar';

const Logo = props => {
    const [urlLocation, setUrlLocation] = useState(window.location.href);
    useEffect(() => {
        setUrlLocation(window.location.href)
    }, window.location.href)

    return (
        <Provider store={store}>
            <div className="logo">
                <h1>Guardian</h1>
                {
                    urlLocation === 'http://localhost:3000/login' || urlLocation === 'http://localhost:3000/register'
                        ?   <div></div>  
                        :   <div className="navdiv">
                                <Navbar props={props}/>
                            </div>
                }
            </div>
        </Provider>
    )
  }
export default Logo