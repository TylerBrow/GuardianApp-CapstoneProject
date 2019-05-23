const initialState = {
  notifications: [],
  user: '',
  address: '',
  radius: ''
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'GET_NOTI':
     return {...state, notifications: action.payload}
    case 'SEND_USER':
      return {...state, user: action.payload}
    case 'GET_GEOFENCE_INFO':
        return {...state, address: action.address, radius: action.radius}
    default:
      return state
  }
}