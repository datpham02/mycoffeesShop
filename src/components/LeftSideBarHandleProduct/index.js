import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import {useDataStore} from '~/components'
function LeftSideBarHandleProduct() {
    const [categories,setCategories] = useState([]);
    
    const [data] =  useDataStore('category');

    useEffect(() => {
        setCategories(data);
    },[data])

    return (
        <div className="flex flex-column mt-[60px] bg-gradient-to-r from-[#8d8b88] srcollAnble">
            {categories.map(item=> {
                return (
                    <div key={item.id} className="flex flex-column mt-[10px] ">
                        <h3 className="text-[20px] font-semibold">
                            <Link to={"/home/" + item.name.toLowerCase()} className="text-[#faf7f3]">{item.name}</Link>
                        </h3>
                        <ul className="list-group list-group-flush ">
                            {item.products.map( item => {
                                return (
                                    <li key={item.name}  className="cursor-pointer hover:bg-[#fff] list-group-item bg-inherit text-[#FC6] font-medium">{item.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    );
}



export default LeftSideBarHandleProduct;
