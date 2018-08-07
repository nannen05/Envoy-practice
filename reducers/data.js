const data = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MAINSLIDER':
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}

export default data;
