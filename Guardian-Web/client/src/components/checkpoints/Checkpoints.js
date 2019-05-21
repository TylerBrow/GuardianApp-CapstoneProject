import React from 'react'
import Notifications from '../notifications/Notifications'
import '../notifications/Notifications.css'
import '../main/Main.css'
import '../nav/Navbar.css'
import '../notifications/Notifications'
import Logo from '../logo/Logo'

class Checkpoints extends React.Component {
    render() {
        return (
            <div>
<<<<<<< HEAD:Guardian-Web/client/src/components/emergency/Emergency.js
                {/* <div className="navdiv">
                    <Navbar props={this.props}/>
                </div> */}
=======
              <Logo />
>>>>>>> 9a6f723ec060053b2a62590b3e9bee7cf9825110:Guardian-Web/client/src/components/checkpoints/Checkpoints.js

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

export default Checkpoints