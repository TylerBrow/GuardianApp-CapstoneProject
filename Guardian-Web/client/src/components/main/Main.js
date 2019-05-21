import React from 'react'
import { Provider } from "react-redux"
// import { BrowserRouter as Router, Route } from "react-router-dom"
import store from "../../store"
import "./Main.css"
import Navbar from '../nav/Navbar'
import Notifications from '../notifications/Notifications'

import SimpleMap from '../GoogleMap'
import CheckPoint from '../CheckpointMap'

const Main = props => {
    return (
        <Provider store={store}>
            <div>

                <div className="homepage">   
                    <div className="notificationreminders">
                        <h1>Notification Reminders</h1>
                        <Notifications />
                    </div>

                    <div className="main">
                        <h1>Guardian Tracker</h1>
                        <div className="googlemap">
                            <CheckPoint />
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    )
  }

export default Main