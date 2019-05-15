import store from '../store'
import axios from 'axios'



export function setNotification(message, date, day, time) {
    
    axios.post('/api/notifications', {message, date, day, time,}).then(resp => {
        
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