import React, {useState} from 'react'
import {setNotification} from '../actions/actions'
// import moment from 'moment'

// import SimpleMap from './GoogleMap'




const Test = (props) => {

   const [message, setMessage] = useState('')
   const [date, setDate] = useState('')
   const [newDate, setTime] = useState('')
   const [category, setCategory] = useState('')
   const time = new Date(`${date} ${newDate}`)
   console.log(time.getTime())
   function handleSubmit(e) {
       e.preventDefault()


       setNotification(category, message, time.getTime())
   }

   return (
     <div>
       <form onSubmit={handleSubmit}>
           <select onChange={e => setCategory(e.target.value)}>
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