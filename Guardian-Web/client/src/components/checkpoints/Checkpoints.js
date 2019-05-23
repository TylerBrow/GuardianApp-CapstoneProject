import React from 'react'
import Notifications from '../notifications/Notifications'
import '../notifications/Notifications.css'
import '../main/Main.css'
import '../nav/Navbar.css'
import '../notifications/Notifications'
import Logo from '../logo/Logo'
import CheckPoint from '../CheckpointMap'


class Checkpoints extends React.Component {
    render() {
        return (
            <div>
              <Logo />

                <div className="homepage">   
                    <div className="notificationreminders">
                        <h1>Notification Reminders</h1>
                        <Notifications />
                    </div>

                    <div className="main">
                        <h1>Contact Nearest Emergency Services</h1>
                        <div className='googlemap'>
                         <CheckPoint />
                        </div>
                    </div>          
                </div>
            </div>
            
        )
    }
}

export default Checkpoints