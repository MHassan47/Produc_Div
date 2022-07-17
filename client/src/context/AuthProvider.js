import { createContext} from "react";


export const AuthContext = createContext({
  id: "",
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  photo_url:"",
  role: "",
  auth: false
})
console.log("}}}}}}}AuthProvider{{{{{{{")


// export const AuthProvider = ({ children }) => {

//   const [auth, setAuth] = useState({});

//   return (
//     <AuthContext.Provider value={{ auth, setAuth}}>
//         {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthContext;

