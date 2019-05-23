import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux'
import {getCoord} from '../actions/actions'
import Logo from './logo/Logo' 
import Notifications from './notifications/Notifications'

const SampleMarker = ({text}) => <div>{text}</div>


class SimpleMap extends Component {
  
    componentWillMount(){
        getCoord()  
        
    }

    static defaultProps = {
        defaultCenter: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
     
      render() {
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
            //   defaultCenter={this.props.coord[this.props.coord.length - 1]}
              center={this.props.center} 
              defaultZoom={this.props.zoom}
              zoom={15}
              yesIWantToUseGoogleMapApiInternals
            >
              <SampleMarker
                lat={this.props.lat}
                lng={this.props.lng}
                // center={this.center}
                text="G"
              />
            </GoogleMapReact>
          </div>
          </div>
          </div>
          </div>
          </div>
        );
      }
    }
     

    function mapStatetoProps(appState) {
        return {
            center: appState.center,
            lat: Number(appState.lat),
            lng: Number(appState.lng)
        }
    }
    export default connect(mapStatetoProps)(SimpleMap)

