import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux'
import {getCoord} from '../actions/actions'
const SampleMarker = ({text}) => <div>{text}</div>
 
class SimpleMap extends Component {

    componentDidMount(){
        getCoord()  
    }

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '500px', width: '500px' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCgWMGQHXjO5_ddzGWfEMq40c3i7oQQI38' }}
              defaultCenter={this.props.center}
              center={this.props.coord} 
              defaultZoom={this.props.zoom}
              zoom={15}
            >
              <SampleMarker
                lat={this.props.coord.lat}
                lng={this.props.coord.lng}
                text="Grandpa"
              />
            </GoogleMapReact>
          </div>
        );
      }
    }
     

    function mapStatetoProps(appState) {
        return {
            coord: appState.center
        }
    }
    export default connect(mapStatetoProps)(SimpleMap)