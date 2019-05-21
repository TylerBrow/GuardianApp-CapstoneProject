import React from 'react'
import "./Main.css"
import Notifications from '../notifications/Notifications'
import Logo from '../logo/Logo'
import '../logo/Logo.css'
import SimpleMap from '../GoogleMap'
import CheckPoint from '../CheckpointMap'

const Main = props => {
    return (
        <div>
            <div className="logo">
                <Logo />
            </div>  

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
    )}

export default Main