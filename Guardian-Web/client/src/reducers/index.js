const initialState = {
  center:{},
  lat: '',
  lng: ''
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'GET_COORD':
     return {...state, center: action.center, lat: action.lat, lng: action.lng}
    default:
      return state
  }
}