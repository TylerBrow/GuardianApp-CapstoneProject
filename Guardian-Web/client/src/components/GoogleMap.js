import React, { useContext, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux'
import {getCoord, getEmergency} from '../actions/actions'
import Logo from './logo/Logo' 
import Notifications from './notifications/Notifications'
import {AuthContext} from '../lib/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SampleMarker = ({text}) => <div className="main-marker"><div className="icon-marker"><FontAwesomeIcon icon='map-marker' color="rgb(115, 57, 244, 1)" size='3x' /></div><p className="g-logo">{text}</p></div>

const EmergencyMarker = ({text1}) => 
<div className="emergency">
  <FontAwesomeIcon icon='exclamation-circle' color="red" size='2x' />
    <p>{text1}</p>
</div>
const SimpleMap = (props) => {

  const { user } = useContext(AuthContext)
  
  const { newCenter, lat, lng, emergency } = useSelector(appState => {
    return {
      newCenter: appState.center,
      lat: Number(appState.lat),
      lng: Number(appState.lng),
      emergency: appState.emergency
    }
  })

  useEffect(() => {
    getCoord(user)
    if(lat !== 0){
    getEmergency(lat, lng)
    }
  }, [lat, lng, user])

  return (
    <div>
      <Logo />
      <div className="homepage">   
        <div className="notificationreminders">
          <h1>Notification Reminders</h1>
          <Notifications />
        </div>
        <div className='main'>   
          <h1>Guardian Tracker</h1>
          {/* <button onClick={reloadData}>button</button> */}
          <div className='googlemap'>
            <div  style={{ height: '100%', width: '100%'}}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCgWMGQHXjO5_ddzGWfEMq40c3i7oQQI38' }}
                center={newCenter} 
                zoom={17}
                yesIWantToUseGoogleMapApiInternals
              >
                <SampleMarker
                  lat={lat}
                  lng={lng}
                  center={props.center}
                  text="G"
                />

                {
                  emergency.map((item,i) => {
                    return <EmergencyMarker
                      key = {'key-' + i}
                      lat = {item.location.lat}
                      lng = {item.location.lng}
                      text1 = {item.name}
                />

                   } )
                
                }    
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleMap