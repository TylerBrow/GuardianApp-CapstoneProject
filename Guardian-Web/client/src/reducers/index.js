const initialState = {
  center:{},
  lat: '',
  lng: '',
  notifications: [],
  all: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'GET_COORD':
     return {...state, all: action.all, center: action.center, lat: action.lat, lng: action.lng}
     case 'GET_NOTIFICATIONS':
     return {...state, notifications: action.notifications}
    default:
      return state
  }
}