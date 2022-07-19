import { createContext } from "react";

export const AuthContext = createContext({});

// syntax ref:
// export const AuthProvider = ({ children }) => {

//   const [auth, setAuth] = useState({});

//   return (
//     <AuthContext.Provider value={{ auth, setAuth}}>
//         {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthContext;
