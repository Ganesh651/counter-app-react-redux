const count = 0

const reducer = (state=count, action) =>{
      const {type,payload} = action

      switch (type) {
            case "INCREMENT":
                  return state + payload;
            case "DECREMENT":
                  return state - payload;
            default:
                  return state;
      }
}


export default reducer