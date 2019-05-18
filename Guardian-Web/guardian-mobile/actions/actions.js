import axios from 'axios'
import store from '../store';
import moment from 'moment'

import { Notifications, Permissions, Vibration } from 'expo'


export function getUserLocation(location){
  const timestamp = location.map(time => time.timestamp)
  const lats = location.map(position => position.coords.latitude)
  const long = location.map(position => position.coords.longitude)

  
  const lat = lats[0]
  const time = timestamp[0]
  const longitude = long[0]
   axios.post('http://10.68.0.243:3001/api/maps', {lat, time, longitude})
}

export function getNotifications(){

  axios.get('http://10.68.0.119:3001/api/notifications').then(resp => {
    console.log(resp.data)
    let localNoti = []
    let newNoti = resp.data
    if (localNoti.length != newNoti.length) {
      Notifications.cancelAllScheduledNotificationsAsync()
      localNoti = newNoti
      localNoti.filter(item => {
        return item.time > (new Date()).getTime()
      }).forEach(item => {
        console.log('filter',item)
        if(item.time > (new Date()).getTime())
        {
        Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`, ios:{sound: true}, android:{sound: true}}, {time:Number(item.time)})
        console.log('no 1')
        }
        if(item.time > (((new Date()).getTime())-10000)){
        Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`, ios:{sound: true}, android:{sound: true}}, {time:Number(item.time) - 10000})
        console.log('no 2')
        }
        if(item.time > (((new Date()).getTime())-30000)){
        Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`, ios:{sound: true}, android:{sound: true}}, {time:Number(item.time) - 30000})
        console.log('no 3')
        }
        if(item.time > (((new Date()).getTime())-60000)){
        Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`, ios:{sound: true}, android:{sound: true}}, {time:Number(item.time) - 60000})
        console.log('no 4')
        }
      })
    }
 
    store.dispatch({
      type: 'GET_NOTI',
      payload: resp.data
    })
  })
}

// export function getNotificationsBack(){
//   axios.get('http://10.68.0.119:3001/api/notifications').then(resp => {
//     const filterData = resp.data.filter((item) => {
//       console.log(item.time)
//       return (item.time < (((new Date()).getTime()) - 70000)) && (item.time > (((new Date()).getTime()) - 100000)) ? 
//         Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`, ios:{sound: true}, android:{sound: true}}, {time:Number(item.time)}) && 
//         Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`, ios:{sound: true}, android:{sound: true}}, {time:Number(item.time) - 10000}) &&
//         Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`, ios:{sound: true}, android:{sound: true}}, {time:Number(item.time) - 30000}) &&
//         Notifications.scheduleLocalNotificationAsync({title:'reminder', body:`${item.message}`, ios:{sound: true}, android:{sound: true}}, {time:Number(item.time) - 60000})
//       : ''
//     })
//   })

// }

// export function ownNotifications(schedule){
//   Notifications.scheduleLocalNotificationAsync(schedule)
//   Vibration.vibrate()

//   setTimeout(() => {
//     Vibration.cancel()
//   }, 2000)
// }

/*
900000 - 15 mins
1800000 - 30 mins
3600000 - 1 hr
*/