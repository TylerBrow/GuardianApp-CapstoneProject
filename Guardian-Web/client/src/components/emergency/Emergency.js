import React, { useState } from 'react'
import Notifications from '../notifications/Notifications'
import '../notifications/Notifications.css'
import Navbar from '../nav/Navbar'
import '../main/Main.css'
import '../nav/Navbar.css'
import Actiontest from '../actiontest'


class Emergency extends React.Component {
    render() {
        return (
            <div>
                {/* <div className="navdiv">
                    <Navbar props={this.props}/>
                </div> */}

                <div className="homepage">   
                    <div className="notificationreminders">
                        <h1>Notification Reminders</h1>
                        <Notifications />
                    </div>

                    <div className="main">
                        <h1>Contact Nearest Emergency Services</h1>
              </div>          
            </div>
        </div>
            
        )
    }
}

export default Emergency