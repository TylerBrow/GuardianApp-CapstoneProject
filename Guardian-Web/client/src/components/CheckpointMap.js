import React, {Component} from 'react'
import GoogleMapReact, {Marker} from 'google-map-react';
import {connect} from 'react-redux'
import {getCoord} from '../actions/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faThumbtack  } from '@fortawesome/free-solid-svg-icons';

library.add(faThumbtack);

const SampleMarker = ({text}) => <div className='marker'><FontAwesomeIcon icon='thumbtack' size='lg' /></div>
const handleApiLoaded = (map, maps) => {
    console.log(map,maps)
}
class CheckPoint extends Component {

    
    componentWillMount() {
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
          // Important! Always set the container height explicitly
          <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyD6VImWKzsNcq76jemUdj5j6qkgofPlcqc' }}
            //   defaultCenter={this.props.coord[this.props.coord.length - 1]}
              center={this.props.center} 
              defaultZoom={this.props.zoom}
              zoom={15}
              yesIWantToUseGoogleMapApiInternals
            //   onGoogleApiLoaded={({map, maps}) => handleApiLoaded(map, maps)}
            >
            {
                this.props.all.map(item => (
                    <SampleMarker
                    lat={item.lat}
                    lng={item.lng}
                    // text = 'G'
                    
                    />
                ))
            }
            </GoogleMapReact>
          </div>
        );
      }
    }
     

    function mapStatetoProps(appState) {
        console.log(appState.all)
        return {
            all: appState.all,
            center: appState.center,
            lat: Number(appState.lat),
            lng: Number(appState.lng)
        }
    }
    export default connect(mapStatetoProps)(CheckPoint)


    // AIzaSyD6VImWKzsNcq76jemUdj5j6qkgofPlcqc

    