import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '~/components/Context/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
    const [user, setUser] = useContext(AuthContext);
    const auth = getAuth();
    const logout = () => {
        setUser(null);
        signOut(auth);
    };
    return (
        <div className="flex items-center h-[100px] pl-[40px] pr-[40px] mb-[30px] border-4 border-dotted">
            <div className="text-[30px] font-semibold "><i><Link className="cursor-pointer hover:text-[white]" to="/home/allproducts">My Coffee</Link></i></div>
            <div className="flex grow justify-end justify-evenly ">
                <div className="w-[70%] flex justify-end items-center">
                    <div className="w-[atuo]">
                        <Link className="mx-4 text-[20px]" to="/home">Home</Link>
                        <Link className="mx-4 text-[20px]" to="/handleemployeehome">Employee Management</Link>
                        <Link className="mx-4 text-[20px]" to="/handleproductshome">Product Management</Link>
                    </div>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon className="w-[32px] h-[32px]" icon={faLocationDot} />
                    Find a store
                </div>
                {user ? (
                    <button
                        onClick={() => {
                            logout();
                        }}
                        className="btn text-[#fff] bg-[#000] hover:bg-[#fff] bg-[#000]"
                        to="/"
                    >
                        Log Out
                    </button>
                ) : (
                    <Link className="btn text-[#fff] bg-[#000] hover:bg-[#fff] bg-[#000]" to="/login">
                        Join now
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;
