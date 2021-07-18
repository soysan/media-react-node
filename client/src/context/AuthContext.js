import { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: {
    _id: "60f037eef61919a9e4a34862",
    profilePicture: "",
    coverPicture:"",
    followers:[],
    followings:[],
    isAdmin: false,
    username:"happy",
    email: "happy@gmail.com",
    password :"$2b$10$KDSF2Uu0nKemL4Z7GBPs2.M6fqvWPfHBoELiUUxuKLwIKCPzjPj2m",
    city:"Tokyo",
    desc:"hey I am a soy lover",
    from:"Japan",
  },
  isFetching: false,
  error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  )
};
