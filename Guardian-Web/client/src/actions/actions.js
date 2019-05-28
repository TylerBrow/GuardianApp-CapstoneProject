import store from '../store'
import axios from 'axios'
import moment from 'moment'


export function setNotification(notification) {
    axios.post('/api/notifications', notification)
}

export function getNotifications(user_id) {
    axios.get(`/api/notifications/${user_id}` ).then(resp => {
        if(resp.data.length !== 0){
       let newTime = resp.data.map(item => moment(Number(item.time)).format('LLL'))
        store.dispatch({
            type: 'GET_NOTIFICATIONS',
            notifications: resp.data,
            newTime: newTime
            
        })
    }
    })
}

export function getCoord(user) {
    axios.get('/api/maps/' + user).then(resp => {
        
        const coord = resp.data
        if(coord.length !== 0 ){
        store.dispatch({
            type: 'GET_COORD',
            all: resp.data,
            center: resp.data[resp.data.length - 1],
            lat: resp.data[resp.data.length - 1].lat,
            lng: resp.data[resp.data.length - 1].lng
        })
    }
    else {
        store.dispatch({
            type: 'GET_COORD',
            all: resp.data,
            center: {lat: 36.023020, lng:  -114.962058},
            lat: 36.023020,
            lng:  -114.962058
        })
    }
    })
}

export function getEmergency(lat, lng) {

    axios.get(`/api/emergency/${lat}/${lng}` ).then( resp => {
        const info = resp.data
        const emergencyInfo = info.results.map(item  => {
            return {
            location: item.geometry.location,
            name: item.name
            }})
       store.dispatch ({
           type: 'GET_EMERGENCY',
           payload: emergencyInfo
       })
    })
}

export function setProfile(user, name, address, radius) {
    return axios.post('/api/profile', {user, name, address, radius})
}

export function getProfile() {
    axios.get('/api/profile').then(resp => {
        if(resp.data.length !== 0){
        store.dispatch({
            type: 'GET_PROFILE',
            profile: resp.data
        })
    }
    })
}