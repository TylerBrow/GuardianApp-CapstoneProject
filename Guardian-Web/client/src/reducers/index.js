const initialState = {
  center:{},
  lat: '',
  lng: '',
  notifications: [],
  newTime : []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'GET_COORD':
     return {...state, center: action.center, lat: action.lat, lng: action.lng}
     case 'GET_NOTIFICATIONS':
     return {...state, notifications: action.notifications, newTime: action.newTime}
    default:
      return state
  }
}