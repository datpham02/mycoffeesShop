import React from 'react';
import {Link} from 'react-router-dom'

function ProductsManagementHeader() {
    
    return (
        <div className="flex items-center h-[100px] pl-[40px] pr-[40px] mb-[30px] border-4 border-dotted">
            <div className="text-[30px] font-semibold "><i><Link className="cursor-pointer hover:text-[white]" to="/home/allproducts">My Coffee</Link></i></div>
            <div className="flex grow justify-end justify-evenly ">
                <div className="w-[100%] flex justify-end items-center">
                </div>
            </div>
        </div>
    );
}

export default ProductsManagementHeader;
