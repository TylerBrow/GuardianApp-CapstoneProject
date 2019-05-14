import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux'
import {getCoord} from '../actions/actions'

const SampleMarker = ({text}) => <div>{text}</div>


class SimpleMap extends Component {

    // componentDidMount() {
    //     getCoord()
    // }

    componentWillMount(){
        getCoord()  
        console.log(this.props.coord)
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
            //   defaultCenter={this.props.coord[this.props.coord.length - 1]}
              center={this.props.coord[this.props.coord.length - 1]} 
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
        console.log(appState.center)
        return {
            coord: appState.center,
            
        }
    }
    export default connect(mapStatetoProps)(SimpleMap)