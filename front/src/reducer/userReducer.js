const initialState = {
  loggedIn: false,
  userName: "",
  userEmail: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      initialState.loggedIn = true;
      console.log(action);
      return state;
    case "LOGOUT":
      initialState.loggedIn = false;
      console.log(action);
      return state;
    default:
      return state;
  }
};

export default userReducer;
