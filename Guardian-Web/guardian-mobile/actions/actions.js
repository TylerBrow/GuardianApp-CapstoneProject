import axios from 'axios'
import store from '../store';

import { Notifications } from 'expo'


export function getUserLocation(location, userId){
  const timestamp = location.map(time => time.timestamp)
  const lats = location.map(position => position.coords.latitude)
  const long = location.map(position => position.coords.longitude)

  
  const lat = lats[0]
  const time = timestamp[0]
  const longitude = long[0]

   axios.post('http://192.168.0.25:3001/api/maps', {lat, time, longitude, userId})
}

export function getNotifications(userId){


  axios.get('http://192.168.0.25:3001/api/notifications/' + userId).then(resp => {
    if(resp.data.length !== 0){
    let localNoti = []
    let newNoti = resp.data
    if (localNoti.length != newNoti.length) {
      Notifications.cancelAllScheduledNotificationsAsync()
      localNoti = newNoti
      localNoti.filter(item => {
        return item.time > (new Date()).getTime()
      }).forEach(item => {
        if(item.time > (new Date()).getTime())
        {
        Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`, ios:{sound: true}, android:{sound: true}}, {time:Number(item.time)})
        // console.log('no 1')
        }
        if(item.time > (((new Date()).getTime())-10000)){
        Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`, ios:{sound: true}, android:{sound: true}}, {time:Number(item.time) - 10000})
        // console.log('no 2')
        }
        if(item.time > (((new Date()).getTime())-30000)){
        Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`, ios:{sound: true}, android:{sound: true}}, {time:Number(item.time) - 30000})
        // console.log('no 3')
        }
        if(item.time > (((new Date()).getTime())-60000)){
        Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`, ios:{sound: true}, android:{sound: true}}, {time:Number(item.time) - 60000})
        // console.log('no 4')
        }
      })
    }
 
    store.dispatch({
      type: 'GET_NOTI',
      payload: resp.data
    })
  }
  })
}

export function geoFencing(userId){

  axios.post('http://192.168.0.25:3001/api/geofence/' + userId)
  
}

export function getGeofence(userId){

  axios.get('http://192.168.0.25:3001/api/gettinggeofence/' + userId).then(resp => {
    const geofence = resp.data[resp.data.length - 1]
    const address = geofence.address
    const radius = geofence.radius
    store.dispatch({
      type: 'GET_GEOFENCE_INFO',
      address: address,
      radius: radius
    })
  })
}

export function sendCheckpoint(timestamp, userId){

  axios.post('http://192.168.0.25:3001/api/checkin/' + userId, {timestamp})
}