import React, {useState} from 'react'
import {setNotification} from '../actions/actions'
import moment from 'moment'
import {getUserID} from '../lib/auth';
import { useContext } from 'react'
import { AuthContext } from "../lib/auth"
// import moment from 'moment'
// import SimpleMap from './GoogleMap'

const Test = (props) => {

  const [message, setMessage] = useState('')
  const [date, setDate] = useState('')
  const [newDate, setTime] = useState('')
  const [category, setCategory] = useState('')
  const [user_id] = useState(1)
  const newDate = new Date(`${date} ${time}`)

 // let [user_id] = useState('')
 // let time = new Date(`${date} ${newDate}`)
 // time = time.getTime()

 // const { user } = useContext(AuthContext)
 // user_id = user
 // console.log(user_id)
  

  function handleSubmit(e) {
      e.preventDefault()
      

      const user = getUserID();
      setNotification({category, message, date, time, user_id: user})
  }

  return (
    <div>
      <form className="notificationsform" onSubmit={handleSubmit}>
          <select onChange={e => setCategory(e.target.value)}>
            <option>Choose an Option</option>
            <option value='Health'>Health</option>
            <option value='Social'>Social</option>
            <option value='Tasks'>Tasks</option>
            <option value='Custom'>Custom</option>
          </select>
          <input type='text' placeholder='message' onChange={e => setMessage(e.target.value)} />
          <input type='date' placeholder='date' onChange={e => setDate(e.target.value)} />
          <input type='time' onChange={e => setTime(e.target.value)} />
          <button>Submit</button>
      </form>
      {/* <div>
          <SimpleMap/>
      </div> */}
    </div>
  )
}

export default Test