import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux'
import {getCoord} from '../actions/actions'

const SampleMarker = ({text}) => <div>{text}</div>


class SimpleMap extends Component {
  
  // getCoords = () => {
    
  //   console.log(this.props.coord)
  //   let center = this.props.coord[this.props.coord.length - 1]
  //   //const lat = center.lat
  //   console.log(center)
  //     //console.log(lat)
  // }

    componentDidMount() {
        
    }

    // componentDidUpdate(){
    //   this.getCoords()
    // }

    componentWillMount(){
        getCoord()  
        // console.log(this.props.coord)
        // this.getCoords()
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
          <div style={{ height: '390px', width: '390px' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCgWMGQHXjO5_ddzGWfEMq40c3i7oQQI38' }}
            //   defaultCenter={this.props.coord[this.props.coord.length - 1]}
              center={this.props.center} 
              defaultZoom={this.props.zoom}
              zoom={15}
            >
              <SampleMarker
                lat={this.props.lat}
                lng={this.props.lng}
                // center={this.center}
                text="G"
              />
            </GoogleMapReact>
          </div>
        );
      }
    }
     

    function mapStatetoProps(appState) {
        console.log(appState.center)
        return {
            center: appState.center,
            lat: Number(appState.lat),
            lng: Number(appState.lng)
        }
    }
    export default connect(mapStatetoProps)(SimpleMap)

    // 202	36.1586439	-115.1523737	NULL	1557865422997.7498