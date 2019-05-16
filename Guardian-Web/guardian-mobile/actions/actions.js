import axios from 'axios'
import store from '../store';
import moment from 'moment'

import { Notifications, Permissions } from 'expo'


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

export function getNotificationsBack(){
  axios.get('http://10.68.0.119:3001/api/notifications').then(resp => {
    const filterData = resp.data.filter((item) => {
      console.log(moment(item.date, moment.ISO_8601))
      console.log(moment())
          return moment(item.date, moment.ISO_8601) >= moment()?  Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`}, {time:(new Date()).getTime() + 10000}): ''
        })
        console.log('filter', filterData)
        console.log('current day', moment(new Date().getTime()).format('dddd'))
  })

}