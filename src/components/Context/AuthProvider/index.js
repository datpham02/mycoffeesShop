import {useState,useEffect,createContext} from 'react';
import {getAuth,onAuthStateChanged  } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';


const AuthContext = createContext();

function AuthProvider({children}) {
    let navigate = useNavigate();
    const auth = getAuth();
    const [user,setUser] = useState(null);


    useEffect(() => {
        const login = onAuthStateChanged(auth,user => {
            if(user) {
                const {email,uid} = user;
                setUser({email,uid});
                navigate("/home/allproducts", { replace: true });
            }else {
                navigate("/login", { replace: true });
            }
        });
        
        return () => login();
    }
    ,[]);
    return (
        <AuthContext.Provider value={[user,setUser]}>
            {children}
        </AuthContext.Provider>
    );
}



export {AuthProvider,AuthContext} ;