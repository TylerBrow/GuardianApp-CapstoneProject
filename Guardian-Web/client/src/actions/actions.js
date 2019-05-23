import store from '../store'
import axios from 'axios'
import moment from 'moment'


export function setNotification(notification) {
    axios.post('/api/notifications', notification)
}

export function getNotifications(user_id) {
    
    axios.get(`/api/notifications/${user_id}` ).then(resp => {
       let newTime = resp.data.map(item => moment(Number(item.time)).format('LLL'))
        store.dispatch({
            type: 'GET_NOTIFICATIONS',
            notifications: resp.data,
            newTime: newTime
            
        })
    })
}

export function getCoord() {
    axios.get('/api/maps').then(resp => {
        console.log(resp.data)
        store.dispatch({
            type: 'GET_COORD',
            all: resp.data,
            center: resp.data[resp.data.length - 1],
            lat: resp.data[resp.data.length - 1].lat,
            lng: resp.data[resp.data.length - 1].lng
        })
    })
}


export function setProfile(profile) {
    return axios.post('/api/profile', profile)
}

export function getProfile() {
    axios.get('/api/profile').then(resp => {
        store.dispatch({
            type: 'GET_PROFILE',
            profile: resp.data
        })
    })
}

