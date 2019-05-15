import axios from 'axios'
import store from '../store';


export function getUserLocation(location){
  const timestamp = location.map(time => time.timestamp)
  const lats = location.map(position => position.coords.latitude)
  const long = location.map(position => position.coords.longitude)

  
  const lat = lats[0]
  const time = timestamp[0]
  const longitude = long[0]
   axios.post('http://10.68.0.119:3001/api/maps', {lat, time, longitude})
}

export function getNotifications(){
  axios.get('http://10.68.0.119:3001/api/notifications').then(resp => {
    store.dispatch({
      type: 'GET_NOTI',
      payload: resp.data
    })
  })
}