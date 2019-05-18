import store from '../store'
import axios from 'axios'




export function setNotification(notification) {
    
    axios.post('/api/notifications', notification)
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