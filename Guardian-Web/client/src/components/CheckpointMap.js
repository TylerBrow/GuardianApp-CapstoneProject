import React, {useContext, useEffect} from 'react'
import GoogleMapReact from 'google-map-react';
import {useSelector} from 'react-redux'
import {getCoord} from '../actions/actions'
import {AuthContext} from '../lib/auth'
import Logo from './logo/Logo' 
import Notifications from './notifications/Notifications'
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
    }, [])


    return (
 <div  style={{ height: '100%', width: '100%'}}>
         <GoogleMapReact
           bootstrapURLKeys={{ key: 'AIzaSyCgWMGQHXjO5_ddzGWfEMq40c3i7oQQI38' }}
        // defaultCenter={props.center}
           center={newCenter} 
         // defaultZoom={props.zoom}
          zoom={15}
          yesIWantToUseGoogleMapApiInternals
         >
        {
         all.map(item => (
         <SampleMarker
            lat={item.lat}
            lng={item.lng}
             />
        ))
        }
        
      </GoogleMapReact>
 </div>
)
}
  
  CheckPoint.defaultProps = {
    center: {
      lat: 36.158638,
      lng: -115.152512
    },
    zoom: 11
  }
  
  export default CheckPoint






















// const handleApiLoaded = (map, maps) => {
//     console.log(map,maps)
// }
// class CheckPoint extends Component {

    
//     componentWillMount() {
//         getCoord()
//     }


//     static defaultProps = {
//         defaultCenter: {
//           lat: 59.95,
//           lng: 30.33
//         },
//         zoom: 11
//       };
     
//       render() {
//         return (
//           // Important! Always set the container height explicitly
//           <div style={{ height: '100%', width: '100%' }}>
//             <GoogleMapReact
//               bootstrapURLKeys={{ key: 'AIzaSyD6VImWKzsNcq76jemUdj5j6qkgofPlcqc' }}
//             //   defaultCenter={this.props.coord[this.props.coord.length - 1]}
//               center={this.props.center} 
//               defaultZoom={this.props.zoom}
//               zoom={15}
//               yesIWantToUseGoogleMapApiInternals
//             //   onGoogleApiLoaded={({map, maps}) => handleApiLoaded(map, maps)}
//             >
//             {
//                 this.props.all.map(item => (
//                     <SampleMarker
//                     lat={item.lat}
//                     lng={item.lng}
//                     // text = 'G'
                    
//                     />
//                 ))
//             }
//             </GoogleMapReact>
//           </div>
//         );
//       }
//     }
     

//     function mapStatetoProps(appState) {
//         console.log(appState.all)
//         return {
//             all: appState.all,
//             center: appState.center,
//             lat: Number(appState.lat),
//             lng: Number(appState.lng)
//         }
//     }
//     export default connect(mapStatetoProps)(CheckPoint)


    // AIzaSyD6VImWKzsNcq76jemUdj5j6qkgofPlcqc

    



    // const SampleMarker = ({text}) => <div className='marker'><FontAwesomeIcon icon='thumbtack' size='lg' /></div>