import store from '../store'
import axios from 'axios'




export function setNotification(notification) {
    axios.post('/api/notifications', notification)
}

export function getNotifications(user_id) {
    console.log('test');
    axios.get(`/api/notifications/${user_id}` ).then(resp => {
        store.dispatch({
            type: 'GET_NOTIFICATIONS',
            notifications: resp
        })
    })
}

export function getCoord() {
    axios.get('/api/maps').then(resp => {
        store.dispatch({
            type: 'GET_COORD',
            center: resp.data[resp.data.length - 1],
            lat: resp.data[resp.data.length - 1].lat,
            lng: resp.data[resp.data.length - 1].lng
        })
    })
}