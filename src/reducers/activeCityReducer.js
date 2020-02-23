export default function activeCityReducer(state, action){
    if (!state){
      return { name: "Amsterdam", address: "Overhoeksplein 2, 1031 KS Amsterdam", slug: "amsterdam" }
    }

    switch (action.type) {
      case 'SET_ACTIVE_CITY': {
        return action.payload;
      }
    default: {
      return state;
    }
  }
}