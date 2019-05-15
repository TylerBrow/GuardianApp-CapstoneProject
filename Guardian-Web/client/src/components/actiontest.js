import React, {useState} from 'react'
import {setNotification} from '../actions/actions'
import moment from 'moment'

import SimpleMap from './GoogleMap'

const Test = (props) => {

    const [message, setMessage] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')


    function handleSubmit(e) {
        e.preventDefault()
        var day = moment(date).format('dddd')
        
        setNotification(message, date, day, time)
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='message' onChange={e => setMessage(e.target.value)} />
            <input type='date' placeholder='date' onChange={e => setDate(e.target.value)} />
            <input type='time' onChange={e => setTime(e.target.value)} />
            <button>Submit</button>
        </form>
        <div>
            <SimpleMap/>
        </div>
      </div>
    )
} 

export default Test