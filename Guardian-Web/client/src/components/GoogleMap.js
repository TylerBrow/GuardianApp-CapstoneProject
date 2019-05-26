import React, { useContext, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { useSelector } from 'react-redux'
import {getCoord, getEmergency, grabData} from '../actions/actions'
import Logo from './logo/Logo' 
import Notifications from './notifications/Notifications'
import {AuthContext} from '../lib/auth'


const SampleMarker = ({text}) => <div>{text}</div>
const EmergencyMarker = ({text1}) => <div><p>{text1}</p></div>
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
    if (lat !== 0) {
    getEmergency(lat, lng)
    }
    grabData()
  }, [lat])

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

                {
                  emergency.map(item => {
                    console.log(item.location.lat, item.location.lng)
                    
                    return <EmergencyMarker
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

SimpleMap.defaultProps = {
  center: {
    lat: 36.158638,
    lng: -115.152512
  },
  zoom: 11
}

export default SimpleMap