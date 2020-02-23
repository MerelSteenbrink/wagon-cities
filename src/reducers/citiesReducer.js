export default function citiesReducer(state = [], action){
    switch (action.type) {
      case 'GET_CITIES':
        return action.payload;
    default:
      return state;
  }
}