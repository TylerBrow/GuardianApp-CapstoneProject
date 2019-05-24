import React, { useContext, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux'
import {getCoord} from '../actions/actions'
import Logo from './logo/Logo' 
import Notifications from './notifications/Notifications'
import {AuthContext} from '../lib/auth'

const SampleMarker = ({text}) => <div>{text}</div>

const SimpleMap = (props) => {
  // let [userId] = useState('')

  const { user } = useContext(AuthContext)
  // userId = user
  const { newCenter, lat, lng } = useSelector(appState => {
    return {
      newCenter: appState.center,
      lat: Number(appState.lat),
      lng: Number(appState.lng)
    }
  })
  console.log('front user', user)
  console.log(newCenter)

  useEffect(() => {
    getCoord(user)
  }, [])

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
          <div className='googlemap'>
            <div  style={{ height: '100%', width: '100%'}}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCgWMGQHXjO5_ddzGWfEMq40c3i7oQQI38' }}
                // defaultCenter={props.center}
                center={newCenter} 
                // defaultZoom={props.zoom}
                zoom={15}
                yesIWantToUseGoogleMapApiInternals
              >
                <SampleMarker
                  lat={lat}
                  lng={lng}
                  center={props.center}
                  text="G"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SimpleMap.defaultProps = {
  center: {
    lat: 36.158638,
    lng: -115.152512
  },
  zoom: 11
}

export default SimpleMap