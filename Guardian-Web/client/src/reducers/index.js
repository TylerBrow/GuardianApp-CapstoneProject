const initialState = {
  center:[],
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'GET_COORD':
     return {...state, center: action.payload}
    default:
      return state
  }
}