import { ProductsManagementHeader, ContentProducts,AddProducts } from '~/components';
import { faPlusCircle,faXmarkCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react'
function HandleEmployeeHome() {
    const [show,setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    return (
        <div className="bg-home_img text-[#fff] h-[100vh]">
            <ProductsManagementHeader />
            <div className="container-lg">
                <div className="row">
                    <div className="col relative">
                        <ContentProducts />
                        <FontAwesomeIcon 
                        icon={faPlusCircle} 
                        onClick={handleShow}
                        className="w-[50px] h-[50px] absolute bottom-[180px] right-[-50px] text-[blue]" 
                        />
                        {show 
                        ?
                        <div className="inset-0 fixed bg-[white]">
                            <AddProducts />
                            <FontAwesomeIcon 
                            icon={faXmarkCircle} 
                            onClick={handleShow}
                            className="w-[50px] h-[50px] absolute bottom-[50px] right-[55px] text-[blue]" 
                            />
                        </div>
                        : 
                        null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HandleEmployeeHome;
