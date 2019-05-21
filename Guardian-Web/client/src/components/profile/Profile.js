import React from 'react'
import Notifications from '../notifications/Notifications'
import '../notifications/Notifications.css'
import '../main/Main.css'
import '../nav/Navbar.css'
import '../addNotifications/AddNotifications.css'
import Logo from '../logo/Logo'
import '../logo/Logo.css'

class Profile extends React.Component {
    render() {
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
                        <h1>Profile</h1>
                    </div>          
                </div>
            </div>    
        )
    }
}

export default Profile