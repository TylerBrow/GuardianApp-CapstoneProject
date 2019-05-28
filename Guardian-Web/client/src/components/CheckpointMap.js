import React, {useContext, useEffect} from 'react'
import GoogleMapReact from 'google-map-react';
import {useSelector} from 'react-redux'
import {getCoord} from '../actions/actions'
import {AuthContext} from '../lib/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faThumbtack  } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbtack);


const SampleMarker = ({text}) => <div className='marker'><FontAwesomeIcon icon='thumbtack' size='lg' /></div>

const CheckPoint = (props) => {

    const { user } = useContext(AuthContext)
    
    const { newCenter, lat, lng, all } = useSelector(appState => {
      return {
        all: appState.all,
        newCenter: appState.center,
        lat: Number(appState.lat),
        lng: Number(appState.lng)
      }
    })
  
    useEffect(() => {
      getCoord(user)
    }, [user])


    return (
 <div  style={{ height: '100%', width: '100%'}}>
         <GoogleMapReact
           bootstrapURLKeys={{ key: 'AIzaSyCgWMGQHXjO5_ddzGWfEMq40c3i7oQQI38' }}
           center={newCenter} 
           zoom={15}
           yesIWantToUseGoogleMapApiInternals
         >
        {
         all.splice((all.length - 5), 5).map((item,i) => (
         <SampleMarker
            key = {'item-' + i}
            lat={item.lat}
            lng={item.lng}
             />
        ))
        }
        
      </GoogleMapReact>
 </div>
)
}
  
  // CheckPoint.defaultProps = {
  //   center: {
  //     lat: 36.158638,
  //     lng: -115.152512
  //   },
  //   zoom: 11
  // }
  
  export default CheckPoint