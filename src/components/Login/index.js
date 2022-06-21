import { getAuth, signInWithEmailAndPassword,onAuthStateChanged  } from 'firebase/auth';
import { useState } from 'react';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const auth = getAuth();
    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Wrong email or password')
          });
    }

    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        
                            <div className="flex justify-center mb-4">
                                <div className="text-[80px] font-semibold">My Coffe</div>
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check"></div>
                                <a href="#!" className="text-gray-800">
                                    Forgot password?
                                </a>
                            </div>

                            <div className="flex flex-column text-center lg:text-left">
                                <button
                                onClick={handleSubmit}
                                    type="button"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Login
                                </button>
                            </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
