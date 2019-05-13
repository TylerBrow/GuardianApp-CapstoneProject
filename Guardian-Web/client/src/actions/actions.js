import store from '../store'
import axios from 'axios'


export function setNotification(message, date, day) {
    axios.post('/api/notifications', {message, date, day})
}