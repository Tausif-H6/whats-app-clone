export const initialState = {
    user: null,//User not logged in
  };
  
  // To Avoid  typing the wrong string we 
  //Create actionTypes object
  export const actionTypes = {
    SET_USER: "SET_USER", // Push information to the data layer
  };
  
  const reducer = (state, action) => {
    //What action we dispacthed we are listing here.
    console.log(action);
    switch (action.type) {
      case actionTypes.SET_USER://If you dispatch setuer action 
        return {
          ...state,//Keep the state as it it
          user: action.user,//chage the action with what we dispatched.
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;