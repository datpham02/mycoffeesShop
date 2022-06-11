import React from 'react';
import Image from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <div className="flex items-center h-[100px] pl-[40px] pr-[40px]">
            <img className="w-[80px] h-[65px] object-cover w-[100%] h-[100%]"src={Image.logo} alt="logo" />
            <div className="flex grow justify-end justify-evenly">
                <div className="w-[70%]"></div>
                <div className="flex items-center">
                    <FontAwesomeIcon className="w-[32px] h-[32px]" icon={faLocationDot}/>
                    Find a store
                </div>
                <button type="button" className="btn btn-outline-dark">Sign in</button>
                <button type="button" className="btn text-[#fff] bg-[#000]">Join now</button>
            </div>
        </div>
    );
}

export default Header;
