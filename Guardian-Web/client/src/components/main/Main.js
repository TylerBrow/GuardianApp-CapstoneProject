import React from 'react'
import { Provider } from "react-redux"
// import { BrowserRouter as Router, Route } from "react-router-dom"
import store from "../../store"
import "./Main.css"
// import Navbar from '../nav/Navbar'
import Notifications from '../notifications/Notifications'

import SimpleMap from '../GoogleMap'


const Main = props => {
    return (
            <div>

                <div className="homepage">   
                    <div className="notificationreminders">
                        <h1>Notification Reminders</h1>
                        <Notifications />
                    </div>

                    <div className="main">
                        <h1>Guardian Tracker</h1>
                        <div className="googlemap">
                            <SimpleMap />
                        </div>
                    </div>
                </div>
            </div>
    )
  }

export default Main