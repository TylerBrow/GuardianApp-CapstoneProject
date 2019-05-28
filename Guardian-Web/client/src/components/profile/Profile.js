import React, { useState, useContext } from 'react'
import Notifications from '../notifications/Notifications'
import '../notifications/Notifications.css'
import '../main/Main.css'
import '../nav/Navbar.css'
import '../addNotifications/AddNotifications.css'
import Logo from '../logo/Logo'
import '../logo/Logo.css'
import './Profile.css'
import { setProfile } from '../../actions/actions';
import { AuthContext} from '../../lib/auth'

const Profile = (props) => {

    const [name, setName] = useState('')
    const [street, setStreet] = useState('')
    // const [apt, setApt] = useState('')
    const [city, setCity] = useState('')
    const [st, setSt] = useState('')
    const [zip, setZip] = useState('')
    const [radius, setRadius] = useState('off')

    const {user} = useContext(AuthContext)
    console.log(user)

    function handleSubmit(e) {
        e.preventDefault();
        const address = street + ',' + city + ',' + st + ' ' + zip
        setProfile(user, name, address, radius).then(
            props.history.push('/')
        )
    }
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
                        <form id="profileform" onSubmit={handleSubmit}>
                            <label>Loved One's Name</label>
                            <input type="text" name="name" placeholder="Name" onChange={e => setName(e.target.value)} />    
                                <fieldset className="fieldset">
                                    <label>Loved One's Address</label><br></br>
                                    <input type="text" name="street" placeholder="Street Address" maxLength="30" onChange={e => setStreet(e.target.value)} />
                                    <input type="text" name="city" placeholder="City" onChange={e => setCity(e.target.value)} />
                                    <input type="text" name="state" placeholder="State" onChange={e => setSt(e.target.value)} />
                                    <input type="text" name="zip" placeholder="Zip Code" onChange={e => setZip(e.target.value)} />
                                </fieldset>
                                <label className="select">Select a Radius Boundary</label>
                                <select className="selectoption" onChange={e => setRadius(e.target.value)}>
                                    <option>Choose Radius</option>
                                    <option value='1000000'>OFF</option>
                                    <option value='25'>25m</option>
                                    <option value='50'>50m</option>
                                    <option value='100'>100m</option>
                                </select>
                                <button type="submit">Submit</button>
                        </form>
                    </div>          
                </div>
            </div>    
        )
    }

export default Profile
