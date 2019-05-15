const initialState = {
  notifications: []
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'GET_NOTI':
     return {...state, notifications: action.payload}
    default:
      return state
  }
}