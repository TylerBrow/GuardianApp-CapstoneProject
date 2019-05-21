import React, {useState} from 'react'
import {setNotification} from '../actions/actions'
import { useContext } from 'react'
import { AuthContext } from "../lib/auth"


const Test = (props) => {

  const [message, setMessage] = useState('')
  const [date, setDate] = useState('')
  const [newDate, setTime] = useState('')
  const [category, setCategory] = useState('')
  let [user_id] = useState('')

   let time = new Date(`${date} ${newDate}`)
   time = time.getTime()

    const { user } = useContext(AuthContext)    
    user_id = user

  function handleSubmit(e) {
      
      

      setNotification({category, message, time, user_id})
      }

  return (
    <div>
      <form className="notificationsform" onSubmit={handleSubmit}>
          <select onChange={e => setCategory(e.target.value)}>
            <option>Choose Reminder Category</option>
            <option value='Health'>Health</option>
            <option value='Social'>Social</option>
            <option value='Tasks'>Tasks</option>
            <option value='Custom'>Custom</option>
          </select>
          <label className="inputfield">
            Reminder
          <input type='text' placeholder='Add reminder' maxLength= '30' onChange={e => setMessage(e.target.value)} />
          </label>
          <label className="inputfield">
            Date
          <input type='date' placeholder='date' onChange={e => setDate(e.target.value)} />
          </label>
          <label className="inputfield">
            Time
          <input type='time' onChange={e => setTime(e.target.value)} />
          </label>
          <button>Submit</button>
      </form>
    </div>
  )
}

export default Test