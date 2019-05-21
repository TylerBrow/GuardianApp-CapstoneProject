const initialState = {
  notifications: [],
  user: ''
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'GET_NOTI':
     return {...state, notifications: action.payload}
    case 'SEND_USER':
      return {...state, user: action.payload}
    default:
      return state
  }
}