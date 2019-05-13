import React, {useState} from 'react'
import {setNotification} from '../actions/actions'

import GoogleMapReact from 'google-map-react'

const Test = (props) => {

    const [message, setMessage] = useState('')
    const [date, setDate] = useState('')
    const [day, setDay] = useState('')


    function handleSubmit(e) {
        e.preventDefault()

        setNotification(message, date, day)
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='message' onChange={e => setMessage(e.target.value)} />
            <input type='text' placeholder='date' onChange={e => setDate(e.target.value)} />
            <input type='text' placeholder='day' onChange={e => setDay(e.target.value)}/>
            <button>Submit</button>
        </form>
        <div>
            
        </div>
      </div>
    )
} 

export default Test